import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Brain, Zap, TrendingUp, Star, ArrowRight, Heart, Target, CheckCircle2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-background -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-50" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
              <Zap className="mr-2 h-3.5 w-3.5" />
              New: AI-Powered Recovery Intelligence
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-200 pb-2">
              Optimize Your Energy, <br className="hidden md:block" />
              <span className="text-primary">Master Your Health</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              BioSync unifies your sleep, HRV, and activity data into a single Daily Energy Score. Get personalized,
              science-backed insights to perform at your peak.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25 rounded-full w-full sm:w-auto"
                >
                  Start Your 14-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/science">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base rounded-full w-full sm:w-auto bg-transparent"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`/diverse-avatars.png?height=32&width=32&query=avatar${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>Loved by 10,000+ health optimizers</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl">
            <div className="rounded-xl border bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden p-2 ring-1 ring-border/50">
              <div className="rounded-lg bg-background border overflow-hidden relative aspect-[16/9] md:aspect-[16/8]">
                {/* Abstract Dashboard UI Representation */}
                <div className="absolute inset-0 bg-muted/20 flex flex-col">
                  <div className="h-14 border-b bg-background flex items-center px-4 gap-4">
                    <div className="h-8 w-24 bg-muted rounded-md animate-pulse"></div>
                    <div className="flex-1"></div>
                    <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>
                  </div>
                  <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                      <div className="h-64 rounded-xl border bg-background shadow-sm p-4 relative overflow-hidden">
                        <div className="absolute top-4 left-4 h-6 w-32 bg-muted/50 rounded animate-pulse"></div>
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="border-r border-t border-dashed border-muted/30"></div>
                          ))}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        <svg
                          className="absolute bottom-0 left-0 right-0 w-full h-40 text-primary"
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 40 L0 30 Q 10 35 20 20 T 40 15 T 60 25 T 80 10 T 100 20 V 40 Z"
                            fill="url(#gradient)"
                            opacity="0.4"
                          />
                          <path
                            d="M0 30 Q 10 35 20 20 T 40 15 T 60 25 T 80 10 T 100 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="currentColor" />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 rounded-xl border bg-background shadow-sm p-4 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div className="h-2 w-12 bg-muted rounded"></div>
                            <div className="h-4 w-4 bg-green-100 dark:bg-green-900 rounded-full"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl font-bold">64 ms</div>
                            <div className="text-xs text-muted-foreground">HRV Average</div>
                          </div>
                          <div className="h-8 w-full relative overflow-hidden">
                            <svg
                              className="absolute bottom-0 w-full h-full text-green-500"
                              viewBox="0 0 100 20"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0 10 Q 25 20 50 10 T 100 10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="h-32 rounded-xl border bg-background shadow-sm p-4 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div className="h-2 w-12 bg-muted rounded"></div>
                            <div className="h-4 w-4 bg-red-100 dark:bg-red-900 rounded-full"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl font-bold">52 bpm</div>
                            <div className="text-xs text-muted-foreground">Resting HR</div>
                          </div>
                          <div className="h-8 w-full relative flex items-end gap-1">
                            {[30, 45, 60, 40, 50, 70, 45, 35].map((h, i) => (
                              <div
                                key={i}
                                style={{ height: `${h}%` }}
                                className="w-full bg-red-200 dark:bg-red-900 rounded-t-sm"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="h-40 rounded-xl border bg-background shadow-sm p-4 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5"></div>
                        <div className="text-4xl font-bold text-primary">85</div>
                        <div className="text-sm text-muted-foreground">Energy Score</div>
                        <svg
                          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-muted/20"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="251"
                            strokeDashoffset="40"
                            className="text-primary/20"
                          />
                        </svg>
                      </div>
                      <div className="h-full rounded-xl border bg-background shadow-sm p-4 flex flex-col">
                        <div className="mb-4 space-y-1">
                          <div className="h-3 w-20 bg-muted rounded"></div>
                          <div className="text-xs text-muted-foreground">8h 12m Sleep</div>
                        </div>
                        <div className="flex-1 flex items-end gap-1.5">
                          {[20, 40, 60, 45, 80, 50, 30, 60, 70, 40, 20].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className={`w-full rounded-sm ${i % 3 === 0 ? "bg-primary" : "bg-primary/30"}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay Content just in case graphic isn't enough */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center space-y-2 opacity-0">
                    <p className="font-semibold text-foreground">Advanced Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-12 -right-12 h-24 w-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY TEAMS AND INDIVIDUALS AT
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Acme Corp", "Global Health", "Wellness Inc", "Peak Performance", "Vitality"].map((name, i) => (
              <div key={i} className="flex items-center justify-center font-bold text-xl">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Bento Style */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Complete Health Intelligence</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stop guessing. Start using data. BioSync connects with your favorite devices to give you a complete
              picture of your health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Feature 1 */}
            <Card className="md:col-span-2 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-background border-none shadow-sm ring-1 ring-border/50 overflow-hidden">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Clinical-Grade Sleep Tracking</h3>
                  <p className="text-muted-foreground">
                    Go beyond basic sleep duration. We analyze your sleep stages, respiratory rate, and movement to
                    provide a true recovery score.
                  </p>
                  <ul className="space-y-2 pt-4">
                    {["REM & Deep Sleep Analysis", "Sleep Latency Tracking", "Circadian Rhythm Sync"].map((item, i) => (
                      <li key={i} className="flex items-center text-sm font-medium">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative min-h-[300px] md:min-h-0 bg-muted/20 md:order-last">
                  {/* Abstract UI Mockup */}
                  <div className="absolute inset-4 rounded-lg bg-background shadow-lg border p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-semibold text-sm">Sleep Stages</span>
                      <span className="text-xs text-muted-foreground">Last Night</span>
                    </div>
                    <div className="flex-1 flex items-end gap-1">
                      {[40, 60, 30, 80, 50, 70, 45, 65, 55, 40].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 bg-primary/20 rounded-sm hover:bg-primary/40 transition-colors"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="border-none shadow-sm ring-1 ring-border/50 overflow-hidden group">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
                  <Brain className="h-5 w-5" />
                </div>
                <CardTitle>AI Health Coach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our AI processes millions of data points to give you specific, actionable advice. No more generic
                  "sleep more" suggestions.
                </p>
                <div className="p-4 bg-muted/30 rounded-lg text-sm border">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-xs text-muted-foreground">BioSync AI • Just now</p>
                      <p className="text-sm">
                        "Your HRV is low today. I recommend skipping HIIT and doing a 20-min recovery walk instead."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-none shadow-sm ring-1 ring-border/50 overflow-hidden group">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle>Goal-Oriented Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Whether you're training for a marathon or just want more energy for your kids, BioSync adapts to your
                  specific goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Weight Loss", "Muscle Gain", "Cognitive Focus", "Longevity"].map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Large Feature 4 */}
            <Card className="md:col-span-2 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/30 dark:to-background border-none shadow-sm ring-1 ring-border/50 overflow-hidden md:col-start-2">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative min-h-[300px] md:min-h-0 bg-muted/20">
                  {/* Abstract UI Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm">
                      <div className="bg-background rounded-xl p-4 shadow-sm border flex flex-col items-center">
                        <Activity className="h-6 w-6 text-red-500 mb-2" />
                        <span className="text-2xl font-bold">62</span>
                        <span className="text-xs text-muted-foreground">HRV (ms)</span>
                      </div>
                      <div className="bg-background rounded-xl p-4 shadow-sm border flex flex-col items-center">
                        <Heart className="h-6 w-6 text-rose-500 mb-2" />
                        <span className="text-2xl font-bold">54</span>
                        <span className="text-xs text-muted-foreground">RHR (bpm)</span>
                      </div>
                      <div className="col-span-2 bg-background rounded-xl p-4 shadow-sm border">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Recovery</span>
                          <span className="text-emerald-600 font-bold">92%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-emerald-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Long-Term Trend Analysis</h3>
                  <p className="text-muted-foreground">
                    Spot correlations between your lifestyle and your biology. Does alcohol ruin your sleep for 2 days?
                    Does meditation actually help your HRV? See the data.
                  </p>
                  <Button variant="link" className="px-0 w-fit text-primary">
                    Explore Analytics <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-muted/50 border-y">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Works with your favorite devices</h2>
          <p className="text-muted-foreground text-lg mb-12">
            BioSync integrates seamlessly with the top wearables and health platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-75">
            {/* Using text for logos to avoid external image dependencies in this demo, but styled to look like logos */}
            {["Apple Health", "Oura", "Whoop", "Garmin", "Fitbit", "Google Fit"].map((brand) => (
              <div key={brand} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="h-16 w-16 bg-background rounded-2xl shadow-sm border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {brand === "Apple Health" ? (
                    <Heart className="h-8 w-8 text-red-500" />
                  ) : brand === "Oura" ? (
                    <div className="h-8 w-8 rounded-full border-4 border-black dark:border-white" />
                  ) : (
                    <Activity className="h-8 w-8 text-foreground" />
                  )}
                </div>
                <span className="text-xs font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Stories from the Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I used to think I was just 'not a morning person'. BioSync showed me my late meals were destroying my deep sleep. Changed my schedule, changed my life.",
                author: "Sarah J.",
                role: "Creative Director",
              },
              {
                text: "The readiness score is scarily accurate. On days it says take it easy, if I push too hard, I always end up sick or injured. It's like having a dedicated coach.",
                author: "Mark T.",
                role: "Marathon Runner",
              },
              {
                text: "Finally, a dashboard that doesn't just show numbers but tells me what to DO with them. The daily actionable insights are worth the subscription alone.",
                author: "Elena R.",
                role: "Founder",
              },
            ].map((t, i) => (
              <Card key={i} className="bg-muted/30 border-none shadow-none">
                <CardContent className="p-8 space-y-6">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg font-medium leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-bold">{t.author}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to master your biology?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the community of high-performers optimizing their health with BioSync. Start your 14-day free trial
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/auth/register">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-lg font-semibold w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started for Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-transparent border-blue-200 text-blue-50 hover:bg-blue-800 hover:text-white w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">No credit card required for trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
