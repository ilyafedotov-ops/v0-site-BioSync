# BioSync Backend Implementation Plan

Detailed tasks and subtasks (with validation) to deliver the backend that fulfills the current frontend features. Reviewed for gaps and expanded with cross-cutting concerns.

## 0. Foundations
- Project scaffold: NestJS/Fastify TS app, module boundaries (auth, users, integrations, ingestion, analytics, journal, reports, notifications, admin).
- Config: env schema (Zod/Joi), secret handling, typed config service, runtime validation.
- Health & readiness: `/healthz`, `/readyz`; DB/Redis/queue checks.
- DX: ESLint/Prettier, Husky/lint-staged, logger (pino), error filter, OpenAPI docs, Dockerfile + docker-compose (Postgres+Redis).
- Observability: basic OpenTelemetry traces/metrics, structured logs.
- CI: lint/test/build pipeline.
- **Validation/tests**: unit test for config loader; e2e healthcheck hitting deps; CI green.

## 0b. Cross-Cutting (Security, Compliance, Governance)
- Security baselines: rate limiting + IP allowlist for admin, CORS, Helmet; CSRF for cookie auth; input validation; output encoding.
- Secrets: vault/KMS integration; key rotation plan for JWT/signing; DB at-rest encryption; PII-at-rest encryption for sensitive columns.
- AuthN hardening: email verification; brute-force protection; device/session revocation; MFA-ready hook.
- Compliance/PII: data classification, access controls, audit log on PII reads/writes; data retention policies; SAR/erasure workflow.
- API governance: versioning strategy (v1 prefix), deprecation policy, error envelope standard.
- Rate/abuse: per-IP/user limits on auth/sync/export; webhook replay window; bot protection.
- **Validation/tests**: rate-limit middleware tests; audit log written on PII update; CSRF enabled on cookie flows; versioned routes respond.

## 1. Auth & User Management
- Email/password: register/login/logout/refresh; Argon2 hashing; session/JWT cookies; invalidation.
- OAuth: Google flow; store provider tokens; account linking.
- RBAC: roles (user, admin), guards, middleware for protected routes.
- Onboarding: capture age/goal/device-connected flag; step tracking.
- **Validation/tests**: auth controller e2e (register/login/refresh/guarded route 401); role guard unit tests; onboarding state persisted.

## 2. User Profile & Settings
- Profile CRUD: name, email, height/weight, timezone.
- Security: password change with current-password check; password policy.
- Notifications preferences: daily summary, recovery alerts, weekly reports, marketing flags.
- Privacy: share-anonymous-data, research opt-in; data-deletion request creation.
- Feature flags per plan: enable/disable premium AI/reports per subscription tier.
- **Validation/tests**: profile update e2e; password change negative (wrong current); preferences persisted; deletion request creates job; feature flag denies premium on free plan.

## 3. Integrations Layer
- Provider strategy: aggregator (Terra/Human API) wrapper + per-provider fallback.
- OAuth/device connect: start/connect/disconnect endpoints; token storage/rotation; scope checks.
- Webhook receiver: signature validation per provider; idempotency keys; enqueue ingestion job.
- Manual sync: trigger ingestion job; auto-sync toggle stored per device.
- Sync history logging: status, record_count, duration.
- **Validation/tests**: webhook signature unit; idempotency on duplicate webhook; connect/disconnect e2e; manual sync enqueues job; history recorded.

## 4. Data Ingestion & Normalization
- Raw storage: metrics_raw (jsonb) with provider metadata.
- Normalizers per domain: sleep, HRV, HR, activity, temp, readiness/recovery, nutrition.
- Unit conversion & timezone handling; dedup/out-of-order handling; backfill support.
- Derived fields: sleep efficiency, sleep debt, 7d rolling averages.
- **Validation/tests**: fixture payloads -> normalized rows snapshot; duplicate payload ignored; timezone normalization correctness; derived fields computed.

## 5. Analytics & AI
- Energy Score engine: weighted model (sleep quality, HRV trend, RHR, activity, journal mood); configurable weights.
- Trends/correlations: energy vs sleep, stress vs recovery; rolling windows.
- Forecasting: simple model (ARIMA/Prophet/Py worker or TS fallback) + caching; feature flag to swap to ML service.
- Recommendations: rule-based + LLM-generated text with guardrails; impact scoring.
- Risk assessment: thresholds per metric; early warning flags.
- AI safety: prompt templating, PII stripping, toxicity filter, audit of prompts/responses.
- **Validation/tests**: deterministic unit tests for score calc; correlation outputs on fixture data; forecast shape/ordering; recommendation rules coverage; guardrail tests (no PII echo, max tokens).

## 6. Dashboard/Insights APIs
- `/dashboard/summary`: energy score, status, key metrics.
- `/metrics/trends`: time-series for sleep, HRV, HR, recovery, stress, temp; aggregation params.
- `/sleep/stages`, `/weekly/overview`.
- `/ai/insights`, `/ai/predictions`, `/ai/recommendations`, `/ai/risk`, `/ai/action-plan`.
- Devices endpoint: list + status + auto-sync flag.
- **Validation/tests**: e2e snapshot of summary endpoint; contract tests for trends (ordering, units); AI endpoints return required fields; devices list reflects toggles.

## 7. Journal & Subjective Data
- CRUD journal entries by date (mood slider, tags, notes).
- Insight generation from journal + metrics correlations.
- **Validation/tests**: create/update/delete/fetch entry e2e; idempotent per date; insight endpoint returns stable message for fixture data.

## 8. Reports & Exports
- Weekly aggregates (energy avg, sleep avg, HRV avg, readiness); correlation card data.
- CSV export job to S3 with signed URL; status polling.
- Import CSV parser -> normalized metrics; validation errors surfaced.
- **Validation/tests**: weekly report correctness on fixture data; export job writes file and returns URL; import rejects bad schema and accepts good rows.

## 9. Notifications & Privacy Workflows
- Notification sender: email (and push hook) for daily summary, recovery alerts, weekly report.
- Preference evaluation per user; quiet hours/timezone aware.
- Data deletion: async job to delete/anonymize user data across tables; audit log.
- **Validation/tests**: preference filtering unit tests; deletion job removes PII and marks audit; dry-run allowed.

## 10. Admin & Observability
- Admin endpoints: overview metrics (active users, MRR placeholder, churn, avg energy), recent signups feed.
- System status: latency/error/webhook success pulled from telemetry/metrics store.
- Audit logging for admin actions.
- **Validation/tests**: admin RBAC e2e; status endpoint returns green/yellow/red based on injected metrics; audit log written on admin updates.

## 11. Jobs & Scheduling
- Queue setup (BullMQ/Temporal): ingestion, normalization, analytics refresh, notifications, exports, data deletion.
- Schedulers: periodic sync per device, daily summary, weekly reports, backfill/retry policy.
- **Validation/tests**: job enqueued on triggers; retry with backoff; scheduler config smoke test; dead-letter handling.

## 12. Deployment & Ops
- Dockerfile + docker-compose for local; env templates.
- Migrations (Prisma/TypeORM) pipelines; seeding demo data for frontend.
- SLOs and alerts: latency, error rate, webhook success; dashboards.
- **Validation/tests**: migration up/down in CI; seed script runs; deploy pipeline dry-run; alert rules referenced.

## 13. Contracts & Documentation
- OpenAPI/Swagger kept in CI; typed SDK generation for frontend (optional).
- README for local dev, env vars, running tests, queues, webhooks.
- **Validation/tests**: OpenAPI generation job; lint docs links; SDK build passes.

## 14. Data Modeling & Migration Governance
- Canonical schemas for: users, oauth_accounts, devices, sync_events, metrics_raw, metrics_normalized, sleep_sessions, hrv_readings, heart_rate, readiness/recovery, activity, nutrition, journal_entries, ai_scores, ai_recommendations, action_plan_items, reports, notifications, privacy_consents, data_deletion_requests, audit_log.
- TimescaleDB hypertables for time-series metrics; indexes on (user_id, ts, type).
- Migration policy: forward-only in prod, rollback scripts for non-breaking changes; migration review checklist.
- **Validation/tests**: migration generates expected tables; sample query plans within targets; rollback tested in staging.

## 15. Subscription/Plan Enforcement (Team Readiness)
- Plan model (free/pro/team), entitlements (history length, AI features, exports, team dashboard).
- Usage limits per plan (exports per day, manual syncs).
- Team/coach model placeholder for “Team” plan (future) with organization_id, memberships, coach permissions.
- **Validation/tests**: entitlement guard denies disallowed feature; usage counters enforced.

## 16. Performance & Caching
- Response caching for read-heavy endpoints (summary/trends) with Redis and user-specific keys.
- N+1 avoidance via batching; pagination/streaming for time-series.
- Background precompute for summaries/forecasts.
- **Validation/tests**: load test target (e.g., 100 RPS dashboard summary) within SLO; cache hit-rate monitored; pagination contract tests.

## 17. Testing Strategy (Holistic)
- Unit: pure functions (score calc, normalization, guards).
- Integration: DB + Redis + queue with test containers.
- e2e: supertest hitting HTTP with seeded data.
- Contract tests for API schemas (OpenAPI-based).
- Load/smoke: k6 artillery for hot paths (health, summary, sync webhook).
- Chaos/resilience: queue failure retries; webhook replay.
- **Validation/tests**: CI stages for unit/integration/e2e/load (smoke-level); gating on coverage thresholds.

## Delivery Order (suggested)
0 Foundations → 0b Cross-Cutting → 1 Auth → 2 Profile/Settings → 3 Integrations → 4 Ingestion → 5 Analytics → 6 Dashboard APIs → 7 Journal → 8 Reports/Exports → 9 Notifications/Privacy → 10 Admin → 11 Jobs/Scheduling → 12 Ops → 13 Contracts/Docs → 14 Data Modeling → 15 Subscription/Plan → 16 Performance/Caching → 17 Testing wrap-up.
