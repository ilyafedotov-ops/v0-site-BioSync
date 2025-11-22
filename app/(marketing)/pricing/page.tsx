import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Minus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-background to-background" />

      <div className="container py-20 px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent pb-2">
            Invest in Your Vitality
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Choose the plan that fits your health journey. Transparent pricing, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
          <Card className="flex flex-col border-muted hover:border-emerald-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Free</CardTitle>
              <CardDescription>Essential tracking for beginners</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">7-day data history</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Basic sleep & HRV tracking</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Daily Energy Score</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Mobile app access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/auth/register" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-emerald-500 shadow-xl shadow-emerald-500/10 relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-emerald-600">Pro</CardTitle>
              <CardDescription>Advanced insights for optimization</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$12</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Unlimited data history</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Advanced trends & analytics</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">AI Health Coach recommendations</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Journal & correlation analysis</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Data export (CSV/PDF)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/auth/register" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start 14-Day Free Trial</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-muted hover:border-emerald-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Team</CardTitle>
              <CardDescription>For clinics & organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">All Pro features</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Coach dashboard</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Patient/Client monitoring</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">API access</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Priority SLA support</span>
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

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-muted/50 p-4 border-b font-medium text-sm">
              <div className="col-span-1">Feature</div>
              <div className="text-center">Free</div>
              <div className="text-center text-emerald-600 font-bold">Pro</div>
              <div className="text-center">Team</div>
            </div>
            {[
              { name: "Data Retention", free: "7 Days", pro: "Unlimited", team: "Unlimited" },
              { name: "Device Sync", free: "2 Devices", pro: "Unlimited", team: "Unlimited" },
              {
                name: "Export Data",
                free: <Minus className="h-4 w-4 mx-auto text-muted-foreground" />,
                pro: <Check className="h-4 w-4 mx-auto text-emerald-600" />,
                team: <Check className="h-4 w-4 mx-auto text-emerald-600" />,
              },
              { name: "AI Insights", free: "Basic", pro: "Advanced", team: "Custom" },
              {
                name: "API Access",
                free: <Minus className="h-4 w-4 mx-auto text-muted-foreground" />,
                pro: <Minus className="h-4 w-4 mx-auto text-muted-foreground" />,
                team: <Check className="h-4 w-4 mx-auto text-emerald-600" />,
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-4 border-b last:border-0 hover:bg-muted/20 text-sm">
                <div className="font-medium text-muted-foreground">{row.name}</div>
                <div className="text-center text-muted-foreground">{row.free}</div>
                <div className="text-center font-medium">{row.pro}</div>
                <div className="text-center text-muted-foreground">{row.team}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You can upgrade to Pro to unlock historical data or downgrade to Free at any time. Your data
                is preserved regardless of your plan status.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What devices do you support?</AccordionTrigger>
              <AccordionContent>
                We currently support direct integration with Apple Health, Oura Ring, Whoop, Fitbit, Garmin, and Google
                Fit. Manual entry is also available for all metrics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does the 14-day trial work?</AccordionTrigger>
              <AccordionContent>
                You get full access to all Pro features for 14 days. We don't require a credit card to start the trial.
                At the end of the trial, you can choose to subscribe or automatically revert to the Free plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is my health data secure?</AccordionTrigger>
              <AccordionContent>
                Yes. We use bank-level encryption (AES-256) for all data at rest and in transit. We are HIPAA compliant
                and never sell your personal health data to third parties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
