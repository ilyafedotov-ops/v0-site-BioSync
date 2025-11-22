import { CheckCircle2, Circle } from "lucide-react"

export function ActionPlan() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm h-full">
      <div className="p-6">
        <h3 className="font-semibold leading-none tracking-tight mb-4">Today's Recommendations</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-sm">Hydrate early</p>
              <p className="text-xs text-muted-foreground">Drink 500ml water within 30 mins of waking.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
            <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium text-sm">Zone 2 Cardio</p>
              <p className="text-xs text-muted-foreground">Keep HR between 130-140bpm for 45 mins.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
            <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium text-sm">Limit Blue Light</p>
              <p className="text-xs text-muted-foreground">Enable night shift mode after 8:00 PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
