"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, Utensils, Plane, Frown, Smile, Meh } from "lucide-react"

export default function JournalPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Daily Journal</h2>
        <p className="text-muted-foreground">Track subjective metrics to improve your algorithm accuracy.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <div className="rounded-xl border bg-card p-6 space-y-6">
            <div className="space-y-3">
              <Label>Morning Mood</Label>
              <div className="flex justify-between text-2xl mb-2">
                <Frown className="text-muted-foreground" />
                <Meh className="text-muted-foreground" />
                <Smile className="text-green-500" />
              </div>
              <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Groggy</span>
                <span>Alert</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Impact Factors (Yesterday)</Label>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Coffee className="h-4 w-4" /> Late Caffeine
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-primary/10 border-primary text-primary">
                  <Utensils className="h-4 w-4" /> Late Meal
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Plane className="h-4 w-4" /> Travel
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                  + Add Tag
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Notes</Label>
              <Textarea placeholder="How did you feel waking up? Any vivid dreams?" className="min-h-[120px]" />
            </div>

            <Button className="w-full md:w-auto">Save Entry</Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-4">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md" />
          </div>
          <div className="rounded-xl border bg-blue-50 dark:bg-blue-900/20 p-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Insight</h4>
            <p className="text-sm text-blue-600 dark:text-blue-200">
              You report feeling "Groggy" 80% of the time when you tag "Late Meal". Try eating 3 hours before bed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
