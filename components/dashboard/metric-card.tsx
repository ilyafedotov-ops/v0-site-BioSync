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
  const isPositive = (trend === "up" && !change.includes("-")) || (trend === "down" && change.includes("-"))

  return (
    <div className="rounded-2xl border bg-card text-card-foreground shadow-sm p-5 transition-all hover:shadow-md hover:border-primary/20 group">
      <div className="flex items-center justify-between space-y-0 pb-2">
        <p className="text-sm font-medium leading-none text-muted-foreground group-hover:text-primary transition-colors">
          {title}
        </p>
        <div className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
      <div className="flex items-baseline space-x-3 pt-3">
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            change.includes("+")
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : change.includes("-") && trend === "down"
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          {change}
        </div>
      </div>
      <p className="text-xs text-muted-foreground pt-2 border-t mt-3 group-hover:border-primary/10 transition-colors">
        {description}
      </p>
    </div>
  )
}
