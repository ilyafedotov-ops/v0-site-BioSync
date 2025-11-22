"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Target, Award } from "lucide-react"

const weeklyStats = [
  {
    label: "Workouts Completed",
    value: "5/5",
    icon: CheckCircle2,
    progress: 100,
    color: "bg-green-500",
  },
  {
    label: "Avg Sleep Quality",
    value: "87%",
    icon: TrendingUp,
    progress: 87,
    color: "bg-blue-500",
  },
  {
    label: "Step Goal",
    value: "6/7 days",
    icon: Target,
    progress: 86,
    color: "bg-purple-500",
  },
  {
    label: "Recovery Days",
    value: "2/2",
    icon: Award,
    progress: 100,
    color: "bg-amber-500",
  },
]

export function WeeklyOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Achievements</CardTitle>
        <CardDescription>Your progress this week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {weeklyStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <span className="text-sm font-bold">{stat.value}</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className={`h-full ${stat.color}`} style={{ width: `${stat.progress}%` }} />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
