"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, Utensils, Plane, Frown, Smile, Meh, Sun, Dumbbell, Wine, Brain, Sparkles } from "lucide-react"

export default function JournalPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Daily Journal</h2>
          <p className="text-muted-foreground mt-1">Track subjective metrics to improve your algorithm accuracy.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-muted-foreground">Today's Streak</p>
          <p className="text-2xl font-bold text-primary">12 Days 🔥</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <div className="rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm p-8 space-y-8">
            <div className="space-y-4">
              <Label className="text-base font-semibold">How are you feeling this morning?</Label>
              <div className="bg-muted/30 p-6 rounded-xl border border-dashed">
                <div className="flex justify-between text-3xl mb-4 px-4">
                  <Frown className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer hover:scale-110" />
                  <Meh className="text-muted-foreground hover:text-yellow-500 transition-colors cursor-pointer hover:scale-110" />
                  <Smile className="text-emerald-500 scale-110 drop-shadow-sm cursor-pointer" />
                </div>
                <Slider defaultValue={[75]} max={100} step={1} className="w-full py-4" />
                <div className="flex justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider px-1">
                  <span>Groggy</span>
                  <span>Neutral</span>
                  <span>Ready to go</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">Impact Factors (Yesterday)</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all bg-transparent"
                >
                  <Coffee className="h-5 w-5" />
                  <span className="text-xs">Late Caffeine</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary/20"
                >
                  <Utensils className="h-5 w-5" />
                  <span className="text-xs">Late Meal</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all bg-transparent"
                >
                  <Plane className="h-5 w-5" />
                  <span className="text-xs">Travel</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all bg-transparent"
                >
                  <Wine className="h-5 w-5" />
                  <span className="text-xs">Alcohol</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all bg-transparent"
                >
                  <Dumbbell className="h-5 w-5" />
                  <span className="text-xs">Heavy Training</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-3 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all bg-transparent"
                >
                  <Sun className="h-5 w-5" />
                  <span className="text-xs">Morning Sun</span>
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto py-3 flex flex-col gap-2 text-muted-foreground border border-dashed"
                >
                  + Add New
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">Daily Notes</Label>
              <Textarea
                placeholder="How did you feel waking up? Any vivid dreams? Log anything else notable here..."
                className="min-h-[120px] resize-none bg-muted/20 focus:bg-background transition-colors"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <Button size="lg" className="px-8 rounded-full shadow-lg shadow-primary/20">
                Save Journal Entry
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border bg-card shadow-sm p-1">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-xl w-full" />
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Brain className="h-24 w-24" />
            </div>
            <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Insight
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed relative z-10">
              You report feeling "Groggy" 80% of the time when you tag "Late Meal".
              <br />
              <br />
              <strong>Recommendation:</strong> Try finishing your last meal 3 hours before bed to improve recovery score
              by ~12%.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
