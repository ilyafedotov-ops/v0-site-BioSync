import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
  description: string
}

export function MetricCard({ title, value, change, trend, icon: Icon, description }: MetricCardProps) {
  const isPositive = (trend === "up" && !change.includes("-")) || (trend === "down" && change.includes("-")) // Simplified logic

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center justify-between space-y-0 pb-2">
        <p className="text-sm font-medium leading-none">{title}</p>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex items-baseline space-x-3 pt-2">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs font-medium ${change.includes("+") ? "text-green-500" : "text-red-500"}`}>
          {change}
        </div>
      </div>
      <p className="text-xs text-muted-foreground pt-1">{description}</p>
    </div>
  )
}
