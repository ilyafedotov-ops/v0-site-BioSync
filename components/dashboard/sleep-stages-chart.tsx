"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { stage: "Awake", duration: 0.3, percentage: 4 },
  { stage: "Light", duration: 3.8, percentage: 49 },
  { stage: "Deep", duration: 2.3, percentage: 30 },
  { stage: "REM", duration: 1.4, percentage: 18 },
]

export function SleepStagesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Architecture</CardTitle>
        <CardDescription>Last night sleep stage breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis
              dataKey="stage"
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
            <Bar dataKey="duration" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.map((item) => (
            <div key={item.stage} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.stage}</span>
              <span className="font-medium">
                {item.duration}h ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
