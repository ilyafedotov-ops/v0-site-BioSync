"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { date: "Mon", energy: 78, hrv: 62, sleep: 7.2 },
  { date: "Tue", energy: 82, hrv: 68, sleep: 7.8 },
  { date: "Wed", energy: 75, hrv: 58, sleep: 6.9 },
  { date: "Thu", energy: 88, hrv: 72, sleep: 8.1 },
  { date: "Fri", energy: 85, hrv: 70, sleep: 7.5 },
  { date: "Sat", energy: 90, hrv: 75, sleep: 8.4 },
  { date: "Sun", energy: 82, hrv: 68, sleep: 7.9 },
]

export function HealthTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Wellness Trends</CardTitle>
        <CardDescription>Energy score, HRV, and sleep duration over the past week</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="energy" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="hrv" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="sleep" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span>Energy Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span>HRV (ms)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span>Sleep (hrs)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
