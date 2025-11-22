"use client"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const energyData = [
  { day: "Mon", score: 65, sleep: 6.2 },
  { day: "Tue", score: 72, sleep: 7.0 },
  { day: "Wed", score: 85, sleep: 7.8 },
  { day: "Thu", score: 68, sleep: 6.5 },
  { day: "Fri", score: 90, sleep: 8.1 },
  { day: "Sat", score: 78, sleep: 7.2 },
  { day: "Sun", score: 82, sleep: 7.5 },
]

const hrvData = [
  { day: "Mon", val: 45 },
  { day: "Tue", val: 48 },
  { day: "Wed", val: 55 },
  { day: "Thu", val: 52 },
  { day: "Fri", val: 62 },
  { day: "Sat", val: 58 },
  { day: "Sun", val: 60 },
]

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Weekly Reports</h2>
          <p className="text-muted-foreground">Deep dive into your recovery trends.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 7 Days
          </Button>
          <Button size="sm">Export CSV</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Avg Energy</div>
            <div className="text-green-500 text-xs font-bold">+5%</div>
          </div>
          <div className="mt-2 text-2xl font-bold">77.1</div>
          <div className="text-xs text-muted-foreground">vs. 73.4 last week</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Avg Sleep</div>
            <div className="text-red-500 text-xs font-bold">-2%</div>
          </div>
          <div className="mt-2 text-2xl font-bold">7h 12m</div>
          <div className="text-xs text-muted-foreground">vs. 7h 25m last week</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Avg HRV</div>
            <div className="text-green-500 text-xs font-bold">+12%</div>
          </div>
          <div className="mt-2 text-2xl font-bold">54ms</div>
          <div className="text-xs text-muted-foreground">vs. 48ms last week</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Readiness</div>
            <div className="text-green-500 text-xs font-bold">+3%</div>
          </div>
          <div className="mt-2 text-2xl font-bold">High</div>
          <div className="text-xs text-muted-foreground">Optimal recovery</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-col space-y-0.5">
            <h3 className="font-semibold leading-none tracking-tight">Energy vs. Sleep</h3>
            <p className="text-sm text-muted-foreground">Correlation between sleep duration and daily score.</p>
          </div>
          <div className="p-6 pt-0 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  activeDot={{ r: 4 }}
                  name="Energy Score"
                />
                <Line
                  type="monotone"
                  dataKey="sleep"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  activeDot={{ r: 4 }}
                  name="Sleep (hrs)"
                  yAxisId={1} // Put on secondary axis conceptually or normalize data in real app
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-col space-y-0.5">
            <h3 className="font-semibold leading-none tracking-tight">HRV Trends</h3>
            <p className="text-sm text-muted-foreground">Nervous system adaptability over time.</p>
          </div>
          <div className="p-6 pt-0 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hrvData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Bar dataKey="val" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="HRV (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
