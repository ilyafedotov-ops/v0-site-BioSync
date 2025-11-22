import { Zap } from "lucide-react"

export function EnergyScoreCard({ score, status }: { score: number; status: string }) {
  return (
    <div className="h-full rounded-xl border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Zap className="h-32 w-32" />
      </div>
      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">Daily Energy Score</h3>
          <p className="text-sm text-muted-foreground">Calculated from 3 sources</p>
        </div>

        <div className="flex items-end gap-4 mt-8">
          <span className="text-7xl font-bold tracking-tighter">{score}</span>
          <div className="mb-2">
            <div className="text-lg font-medium text-primary">{status}</div>
            <div className="text-xs text-muted-foreground">Updated 10m ago</div>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Readiness</span>
            <span className="font-medium">High</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[82%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
