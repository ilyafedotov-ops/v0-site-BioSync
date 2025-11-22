import { Users, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
        <p className="text-muted-foreground">System health and business metrics at a glance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium">Active Users</p>
                <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">12,458</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium">MRR</p>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">$48,320</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium">Churn Rate</p>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-green-500">-0.8% from last month</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium">Avg Energy Score</p>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">73.2</div>
            <p className="text-xs text-muted-foreground">Platform average</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold mb-4">Recent Signups</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm pb-3 border-b">
                    <div>
                        <p className="font-medium">sarah.jones@email.com</p>
                        <p className="text-xs text-muted-foreground">Joined 5 minutes ago</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">Pro Trial</span>
                </div>
                <div className="flex items-center justify-between text-sm pb-3 border-b">
                    <div>
                        <p className="font-medium">mike.chen@email.com</p>
                        <p className="text-xs text-muted-foreground">Joined 12 minutes ago</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm pb-3 border-b">
                    <div>
                        <p className="font-medium">emma.wilson@email.com</p>
                        <p className="text-xs text-muted-foreground">Joined 28 minutes ago</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">Pro Trial</span>
                </div>
            </div>
        </div>

        <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">API Latency</p>
                        <p className="text-xs text-muted-foreground">Average response time</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">142ms</span>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">Webhook Success</p>
                        <p className="text-xs text-muted-foreground">Data sync from wearables</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">99.2%</span>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">Error Rate</p>
                        <p className="text-xs text-muted-foreground">Last 24 hours</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">0.08%</span>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
