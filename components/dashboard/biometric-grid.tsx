"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Activity,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  Brain,
  TrendingUp,
  Moon,
  Sun,
  Dumbbell,
  Apple,
} from "lucide-react"

const biometrics = [
  { label: "Heart Rate Variability", value: "68 ms", status: "Optimal", icon: Activity, color: "text-purple-500" },
  { label: "Resting Heart Rate", value: "54 bpm", status: "Excellent", icon: Heart, color: "text-red-500" },
  { label: "Blood Oxygen", value: "98%", status: "Normal", icon: Wind, color: "text-blue-500" },
  { label: "Body Temperature", value: "36.8°C", status: "Normal", icon: Thermometer, color: "text-orange-500" },
  { label: "Hydration Level", value: "85%", status: "Good", icon: Droplets, color: "text-cyan-500" },
  { label: "Stress Score", value: "24/100", status: "Low", icon: Brain, color: "text-indigo-500" },
  { label: "VO2 Max", value: "52 ml/kg/min", status: "Very Good", icon: TrendingUp, color: "text-green-500" },
  { label: "Sleep Debt", value: "-30 min", status: "Minimal", icon: Moon, color: "text-slate-500" },
  { label: "Active Energy", value: "542 kcal", status: "On Track", icon: Zap, color: "text-yellow-500" },
  { label: "UV Exposure", value: "Low", status: "Safe", icon: Sun, color: "text-amber-500" },
  { label: "Training Load", value: "Moderate", status: "Balanced", icon: Dumbbell, color: "text-pink-500" },
  { label: "Nutrition Score", value: "82/100", status: "Great", icon: Apple, color: "text-lime-500" },
]

export function BiometricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {biometrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.status}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
