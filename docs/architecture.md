# BioSync Solution Architecture

This document describes the backend architecture, component responsibilities, data flows, and key workflows required to fulfill the current frontend features.

## 1) High-Level Component Topology
```mermaid
graph TD
    Browser["Next.js Frontend\n(SSR/ISR + Client)"]
    API["API Gateway / BFF\n(NestJS/Fastify)"]
    Auth["Auth & RBAC"]
    Users["User/Profile/Settings"]
    Integrations["Integrations Service\n(OAuth + Webhooks)"]
    Ingestion["Ingestion & Normalization"]
    Analytics["Analytics & AI Service"]
    Journal["Journal Service"]
    Reports["Reports/Exports Service"]
    Notifications["Notifications Service"]
    Admin["Admin/Observability API"]
    Queue["Job Queue\n(BullMQ/Redis)"]
    Cache["Cache\n(Redis)"]
    DB["Postgres/TimescaleDB"]
    Storage["Object Storage\n(S3-compatible)"]
    Telemetry["Telemetry\n(OTel + Prom/Grafana)"]

    Browser -->|REST/GraphQL| API
    API --> Auth
    API --> Users
    API --> Integrations
    API --> Journal
    API --> Reports
    API --> Analytics
    API --> Notifications
    API --> Admin

    Integrations -->|Webhooks/OAuth tokens| API
    API --> Queue
    Queue --> Ingestion
    Ingestion --> DB
    Ingestion -->|normalized metrics| Analytics
    Analytics --> DB
    Analytics --> Cache
    Reports --> DB
    Reports --> Storage
    Reports --> Cache
    Notifications --> Queue
    Queue --> Notifications

    Auth --> DB
    Users --> DB
    Journal --> DB
    Reports --> Storage
    Admin --> Telemetry
    API --> Telemetry
```

## 2) Data Model (ER Snapshot)
```mermaid
erDiagram
    USERS ||--o{ OAUTH_ACCOUNTS : "has"
    USERS ||--o{ DEVICES : "owns"
    USERS ||--o{ JOURNAL_ENTRIES : "writes"
    USERS ||--o{ AI_SCORES : "receives"
    USERS ||--o{ AI_RECOMMENDATIONS : "receives"
    USERS ||--o{ ACTION_PLAN_ITEMS : "receives"
    USERS ||--o{ REPORTS : "receives"
    USERS ||--o{ NOTIFICATION_PREFS : "configures"
    USERS ||--o{ DATA_DELETION_REQUESTS : "creates"

    DEVICES ||--o{ SYNC_EVENTS : "produce"
    SYNC_EVENTS ||--o{ METRICS_RAW : "store"
    METRICS_RAW ||--o{ METRICS_NORMALIZED : "map to"
    METRICS_NORMALIZED ||--o{ SLEEP_SESSIONS : "materialize"
    METRICS_NORMALIZED ||--o{ HRV_READINGS : "materialize"
    METRICS_NORMALIZED ||--o{ HEART_RATE : "materialize"
    METRICS_NORMALIZED ||--o{ ACTIVITY : "materialize"
    METRICS_NORMALIZED ||--o{ READINESS : "materialize"

    JOURNAL_ENTRIES ||--o{ JOURNAL_TAGS : "tagged by"
    AI_SCORES ||--o{ AI_PREDICTIONS : "forecast"
    AI_SCORES ||--o{ AI_RISKS : "assess"
```

## 3) Data Ingestion & Normalization Workflow
```mermaid
sequenceDiagram
    participant Provider as Wearable/Provider
    participant Webhook as Webhook Endpoint
    participant API as API Gateway
    participant Queue as Job Queue
    participant Ingest as Ingestion Worker
    participant DB as Postgres/Timescale
    participant Analytics as Analytics Service

    Provider->>Webhook: Signed payload (sleep/hrv/etc)
    Webhook->>API: Validate signature + auth scope
    API->>Queue: Enqueue ingestion job (idempotency key)
    Queue-->>Ingest: Deliver job
    Ingest->>DB: Store METRICS_RAW (jsonb)
    Ingest->>DB: Upsert METRICS_NORMALIZED (unit convert, dedup)
    Ingest->>Analytics: Trigger derived metrics/rollups
    Analytics->>DB: Persist scores/trends
```

## 4) Dashboard/Insights Request Flow
```mermaid
sequenceDiagram
    participant Client as Frontend (Dashboard)
    participant API as API Gateway
    participant Cache as Redis Cache
    participant Analytics as Analytics Service
    participant DB as Postgres/Timescale

    Client->>API: GET /dashboard/summary
    API->>Cache: Check cached summary
    alt Cache hit
        Cache-->>API: Summary payload
    else Cache miss
        API->>Analytics: Fetch latest scores/rollups
        Analytics->>DB: Query normalized metrics
        DB-->>Analytics: Data
        Analytics-->>API: Computed summary
        API->>Cache: Store cached summary (TTL)
    end
    API-->>Client: Summary response
```

## 5) Reports & Exports Workflow
```mermaid
sequenceDiagram
    participant Client as Frontend
    participant API as API Gateway
    participant Queue as Job Queue
    participant Reports as Reports Worker
    participant DB as Postgres/Timescale
    participant Storage as S3

    Client->>API: POST /reports/export (csv)
    API->>Queue: Enqueue export job
    Queue-->>Reports: Deliver job
    Reports->>DB: Aggregate weekly metrics
    Reports->>Storage: Write CSV
    Reports-->>API: Store export record + signed URL
    Client->>API: GET /reports/export/:id/status
    API-->>Client: status + download_url when ready
```

## 6) Notifications Flow (Daily Summary / Alerts)
```mermaid
sequenceDiagram
    participant Scheduler as Cron/Scheduler
    participant Queue as Job Queue
    participant Notifications as Notification Worker
    participant API as API (preferences)
    participant DB as Postgres
    participant Email as Email Provider

    Scheduler->>Queue: Enqueue daily-summary jobs
    Queue-->>Notifications: Deliver job
    Notifications->>API: Fetch user preferences/timezone
    Notifications->>DB: Fetch latest summary/alerts
    Notifications->>Email: Send templated email
```

## 7) AI Insights Generation
```mermaid
sequenceDiagram
    participant Analytics as Analytics Service
    participant DB as Postgres/Timescale
    participant LLM as AI Model/Provider

    Analytics->>DB: Fetch normalized metrics + journal
    Analytics->>Analytics: Compute correlations/threshold flags
    Analytics->>LLM: Prompt with redacted, aggregated signals
    LLM-->>Analytics: Narrative insights/recommendations
    Analytics->>DB: Store AI_SCORES, AI_RECOMMENDATIONS, ACTION_PLAN_ITEMS
```

## 8) Deployment & Environments
- Environments: dev (local docker-compose), staging (full stack, sandboxed webhooks), prod.
- CI pipelines: lint → unit → integration (DB/Redis/queue) → e2e → build → deploy.
- Observability: OTel traces/metrics/logs → collector → Prom/Grafana; alerting on SLOs (latency, error rate, webhook success).
- Secrets: managed via cloud KMS/secret manager; rotated keys for JWT/webhooks.

## 9) Scalability & Performance Considerations
- Time-series: Timescale hypertables for metrics with compression; indexes on (user_id, ts, type).
- Caching: Redis for dashboard summaries and trends; cache-busting on ingestion completion.
- Asynchrony: Queue offloads ingestion, normalization, analytics, notifications, exports.
- Rate limits: Per-IP/user on auth, exports, manual sync; webhook replay window; admin IP allowlist.

## 10) Security & Compliance Highlights
- Auth: Argon2 hashes, refresh rotation, email verification; optional MFA hook.
- API: Versioned routes, CORS/Helmet, input validation, CSRF for cookie sessions.
- PII: Column-level encryption for sensitive fields; audit log for PII access; data deletion workflow.
- Integrations: Webhook signature validation per provider; idempotency keys; token rotation.
- AI Safety: Prompt templates, PII stripping, output guardrails, audit of prompts/responses.

## 11) Component Responsibilities (Summary)
- API Gateway/BFF: Request authN/Z, orchestrate services, enforce rate limits, expose OpenAPI.
- Auth Service: Identity, sessions, OAuth, RBAC, email verification.
- Integrations Service: OAuth handshakes, webhook validation, device state, sync history.
- Ingestion Service: Persist raw payloads, normalize metrics, dedup, unit conversion.
- Analytics & AI Service: Scores, trends, forecasts, recommendations, risk; caches hot reads.
- Journal Service: Subjective data CRUD and correlation hooks.
- Reports Service: Aggregations and exports/imports.
- Notifications Service: Preferences, templates, delivery, quiet-hours.
- Admin/Observability: Platform metrics, system health, audit trails.
- Shared Infra: Postgres/Timescale, Redis (cache/queue), S3 storage, telemetry stack.
