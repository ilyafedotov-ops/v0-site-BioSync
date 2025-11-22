import { EnergyScoreCard } from "@/components/dashboard/energy-score-card"
import { MetricCard } from "@/components/dashboard/metric-card"
import { ActionPlan } from "@/components/dashboard/action-plan"
import { HealthTrendChart } from "@/components/dashboard/health-trend-chart"
import { SleepStagesChart } from "@/components/dashboard/sleep-stages-chart"
import { BiometricGrid } from "@/components/dashboard/biometric-grid"
import { WeeklyOverview } from "@/components/dashboard/weekly-overview"
import { Moon, Activity, Heart, Battery, Brain, Thermometer, ArrowRight, Sparkles, Cloud } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Good Morning, James</h2>
          <p className="text-muted-foreground mt-1">You're on a 5-day streak! Keep up the momentum.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 rounded-full bg-transparent">
            Export Data
          </Button>
          <Button className="gap-2 rounded-full shadow-lg shadow-primary/20">
            <Sparkles className="h-4 w-4" />
            AI Analysis
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-8">
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

      <Tabs defaultValue="overview" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-muted/50 p-1 rounded-full border">
            <TabsTrigger
              value="overview"
              className="rounded-full px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="detailed"
              className="rounded-full px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Detailed Metrics
            </TabsTrigger>
            <TabsTrigger
              value="trends"
              className="rounded-full px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Trends
            </TabsTrigger>
          </TabsList>

          <div className="hidden md:flex text-sm text-muted-foreground items-center gap-2">
            <span>Last synced: Just now</span>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-full lg:col-span-4 rounded-2xl border bg-card shadow-sm p-1">
              <HealthTrendChart />
            </div>
            <div className="col-span-full lg:col-span-3">
              <ActionPlan />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card shadow-sm p-1">
              <SleepStagesChart />
            </div>
            <WeeklyOverview />
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2">
          <BiometricGrid />
        </TabsContent>

        <TabsContent value="trends" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2">
          <div className="grid gap-6">
            <div className="rounded-2xl border bg-card shadow-sm p-1">
              <HealthTrendChart />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-card shadow-sm p-1">
                <SleepStagesChart />
              </div>
              <WeeklyOverview />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            Connected Ecosystem
          </h3>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            Manage Devices <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-between p-4 rounded-xl border bg-background/50 hover:bg-background hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ⌚
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Apple Watch</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Synced 2m ago
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border bg-background/50 opacity-60 hover:opacity-100 transition-all cursor-pointer hover:border-primary/20 group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-stone-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                💍
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Oura Ring</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Connection lost
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-transparent">
              Reconnect
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border bg-background/50 hover:bg-background hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📱
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Health App</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Synced 1h ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
