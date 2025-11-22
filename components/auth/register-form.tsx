"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Simple multi-step onboarding wizard
export function RegisterForm() {
  const [step, setStep] = React.useState<number>(1)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="28" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goal">Primary Goal</Label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="goal"
                >
                  <option>Better Sleep</option>
                  <option>Athletic Performance</option>
                  <option>Stress Management</option>
                  <option>Cognitive Focus</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="p-4 border rounded-lg bg-muted/50 text-center">
                <h3 className="font-semibold mb-2">Connect Your Device</h3>
                <p className="text-sm text-muted-foreground mb-4">Sync your data to get your first Energy Score.</p>
                <div className="flex justify-center gap-4">
                  <div className="h-10 w-10 rounded bg-white flex items-center justify-center shadow-sm">🍎</div>
                  <div className="h-10 w-10 rounded bg-white flex items-center justify-center shadow-sm">⭕</div>
                  <div className="h-10 w-10 rounded bg-white flex items-center justify-center shadow-sm">⌚</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>
          )}

          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {step === 3 ? "Complete Setup" : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  )
}
