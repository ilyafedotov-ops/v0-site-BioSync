import { EnergyScoreCard } from "@/components/dashboard/energy-score-card"
import { MetricCard } from "@/components/dashboard/metric-card"
import { ActionPlan } from "@/components/dashboard/action-plan"
import { HealthTrendChart } from "@/components/dashboard/health-trend-chart"
import { SleepStagesChart } from "@/components/dashboard/sleep-stages-chart"
import { BiometricGrid } from "@/components/dashboard/biometric-grid"
import { WeeklyOverview } from "@/components/dashboard/weekly-overview"
import { Moon, Activity, Heart, Battery, Brain, Thermometer } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Good Morning, James</h2>
        <p className="text-muted-foreground">Here is your comprehensive health overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <div className="col-span-full lg:col-span-3">
          <EnergyScoreCard score={82} status="Prime" />
        </div>
        <div className="col-span-full lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Sleep Score"
            value="7h 42m"
            change="+12%"
            trend="up"
            icon={Moon}
            description="Deep: 2h 18m | REM: 1h 54m"
          />
          <MetricCard
            title="HRV"
            value="68 ms"
            change="+5%"
            trend="up"
            icon={Activity}
            description="7-day avg: 65 ms"
          />
          <MetricCard
            title="Resting HR"
            value="54 bpm"
            change="-2%"
            trend="down"
            icon={Heart}
            description="Overnight: 52 bpm"
          />
          <MetricCard
            title="Recovery"
            value="94%"
            change="+8%"
            trend="up"
            icon={Battery}
            description="Fully recovered"
          />
          <MetricCard
            title="Stress Level"
            value="Low"
            change="-15%"
            trend="down"
            icon={Brain}
            description="Below baseline"
          />
          <MetricCard
            title="Body Temp"
            value="36.8°C"
            change="0%"
            trend="up"
            icon={Thermometer}
            description="Within normal range"
          />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Metrics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-full lg:col-span-4">
              <HealthTrendChart />
            </div>
            <div className="col-span-full lg:col-span-3">
              <ActionPlan />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <SleepStagesChart />
            <WeeklyOverview />
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <BiometricGrid />
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4">
            <HealthTrendChart />
            <div className="grid gap-4 md:grid-cols-2">
              <SleepStagesChart />
              <WeeklyOverview />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl border bg-card p-6">
        <h3 className="font-semibold mb-4">Connected Devices</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-background">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">⌚</div>
              <div>
                <p className="text-sm font-medium">Apple Watch</p>
                <p className="text-xs text-muted-foreground">Synced 2m ago</p>
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-background opacity-50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">⭕</div>
              <div>
                <p className="text-sm font-medium">Oura Ring</p>
                <p className="text-xs text-muted-foreground">Disconnected</p>
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-red-500" />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border bg-background">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center">📱</div>
              <div>
                <p className="text-sm font-medium">Health App</p>
                <p className="text-xs text-muted-foreground">Synced 1h ago</p>
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
