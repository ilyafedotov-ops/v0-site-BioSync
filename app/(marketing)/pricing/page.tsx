import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Simple, Transparent Pricing</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Start free, upgrade when you're ready. Cancel anytime.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Perfect for getting started</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">7-day data history</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Basic sleep & HRV tracking</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Daily energy score</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Mobile app access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/auth/register" className="w-full">
              <Button variant="outline" className="w-full bg-transparent">
                Start Free
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-primary shadow-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For serious optimization</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Unlimited data history</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Advanced analytics & trends</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">AI-powered recommendations</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Daily journal & tracking</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Priority support</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Export your data</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/auth/register" className="w-full">
              <Button className="w-full">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
            <CardDescription>For coaches & organizations</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Everything in Pro</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Team dashboard</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Coach collaboration tools</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Custom integrations</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Dedicated support</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">SLA guarantee</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-transparent">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left mt-8">
          <div>
            <h3 className="font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What devices are supported?</h3>
            <p className="text-muted-foreground">
              We support Oura Ring, Whoop, Apple Watch, Fitbit, and Garmin devices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">
              Yes, Pro plans include a 14-day free trial. No credit card required.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How do I cancel?</h3>
            <p className="text-muted-foreground">
              Cancel anytime from your account settings. You'll retain access until the end of your billing period.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
