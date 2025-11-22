import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Brain,
  Moon,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Star,
  ArrowRight,
  Heart,
  Target,
  BarChart3,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              AI-Powered Recovery Intelligence
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Optimize Your Energy, <span className="text-primary">Not Just Your Sleep</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance leading-relaxed">
              BioSync combines sleep analysis, HRV monitoring, and daily habits to deliver a personalized energy score
              with AI-driven insights for peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/register">
                <Button size="lg" className="text-base font-semibold px-8 h-12">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/science">
                <Button size="lg" variant="outline" className="text-base font-semibold px-8 h-12 bg-transparent">
                  See the Science
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start text-sm">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">Trusted by 10,000+ users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">2.5M+</div>
              <div className="text-sm text-muted-foreground mt-1">Nights Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground mt-1">Avg. Energy Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything You Need to Perform Better
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real-time insights backed by sleep science and machine learning
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Moon,
                title: "Deep Sleep Tracking",
                description:
                  "Analyze sleep stages, latency, and efficiency to understand your recovery patterns with clinical-grade accuracy.",
              },
              {
                icon: Activity,
                title: "HRV Monitoring",
                description:
                  "Heart rate variability insights reveal your nervous system's readiness for stress and physical demands.",
              },
              {
                icon: Brain,
                title: "AI Energy Forecast",
                description:
                  "Get personalized predictions for your focus, mood, and physical capacity each day based on your data.",
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description:
                  "Visualize weekly and monthly patterns to spot improvements, setbacks, and correlations in your health.",
              },
              {
                icon: Target,
                title: "Smart Action Plans",
                description:
                  "Receive daily recommendations tailored to your current recovery state and performance goals.",
              },
              {
                icon: Heart,
                title: "Daily Journal",
                description:
                  "Log mood, stress, and activities to help the AI understand your unique patterns and optimize suggestions.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Three Steps to Better Performance
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect Your Devices",
                description: "Sync data from Apple Health, Oura, Garmin, WHOOP, Fitbit, and more in seconds.",
                icon: Shield,
              },
              {
                step: "02",
                title: "AI Analyzes Your Data",
                description:
                  "Our machine learning models process your biometrics to identify patterns and correlations.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Get Actionable Insights",
                description: "Receive personalized recommendations and energy forecasts to optimize your day.",
                icon: BarChart3,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">{item.description}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted by High Performers</h2>
            <p className="text-muted-foreground text-lg">
              See how BioSync is helping people optimize their health and performance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "BioSync helped me identify that late caffeine was tanking my recovery. My HRV is up 20% since making that one change.",
                name: "Alex Chen",
                role: "Software Engineer",
                company: "Tech Startup",
              },
              {
                quote:
                  "As a founder, knowing when to push hard and when to recover has been game-changing for my productivity and decision-making.",
                name: "Sarah Mitchell",
                role: "Startup CEO",
                company: "SaaS Company",
              },
              {
                quote:
                  "I've tried every tracker on the market. BioSync is the first that actually changed my behavior through smart, actionable insights.",
                name: "Jordan Lee",
                role: "Triathlete",
                company: "Professional Athlete",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="pt-2 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8 max-w-4xl relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            Ready to Unlock Your Peak Performance?
          </h2>
          <p className="text-lg md:text-xl opacity-90 text-balance leading-relaxed max-w-2xl mx-auto">
            Join thousands optimizing their energy with personalized, science-backed insights. Start your free 14-day
            trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="text-base font-semibold px-8 h-12">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 h-12 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-75 pt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
