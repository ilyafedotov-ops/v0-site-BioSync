import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Activity, Brain, Moon, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SciencePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-background to-background" />

      <div className="container py-20 px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
            <Activity className="mr-2 h-4 w-4" />
            Evidence-Based Methodology
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            The Science of BioSync
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our algorithms are built on decades of peer-reviewed research in autonomic nervous system function,
            circadian biology, and exercise physiology.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <Card className="bg-gradient-to-b from-card to-emerald-50/20 border-muted">
            <CardHeader>
              <Activity className="h-10 w-10 text-emerald-600 mb-4" />
              <CardTitle>HRV Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Heart Rate Variability reflects the balance between your sympathetic (fight-or-flight) and
                parasympathetic (rest-and-digest) nervous systems. We use RMSSD metrics to accurately gauge your
                recovery status.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-card to-emerald-50/20 border-muted">
            <CardHeader>
              <Moon className="h-10 w-10 text-indigo-500 mb-4" />
              <CardTitle>Sleep Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Not all sleep is created equal. Our models analyze the proportion of REM and Deep (SWS) sleep to
                calculate a restorative score, emphasizing the specific recovery benefits of each stage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-card to-emerald-50/20 border-muted">
            <CardHeader>
              <Brain className="h-10 w-10 text-amber-500 mb-4" />
              <CardTitle>Circadian Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We map your chronotype against your activity patterns to recommend optimal windows for peak performance,
                deep work, and wind-down routines based on your unique biological clock.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Research Section */}
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Research Findings */}
          <section>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <FileText className="h-8 w-8 text-emerald-600" />
              Key Research Findings
            </h2>
            <div className="grid gap-6">
              {[
                {
                  title: "HRV & Cognitive Performance",
                  citation: "Thayer et al., 2009",
                  text: "Higher resting HRV is significantly correlated with improved executive function, working memory, and emotional regulation capabilities under stress.",
                },
                {
                  title: "Sleep Stages & Recovery",
                  citation: "Walker & Stickgold, 2006",
                  text: "Deep sleep (NREM 3) is critical for physical restoration and immune system function, while REM sleep facilitates emotional processing and procedural memory consolidation.",
                },
                {
                  title: "Autonomic Balance in Athletes",
                  citation: "Plews et al., 2013",
                  text: "Monitoring daily HRV changes allows for more precise training load adjustments, reducing injury risk by up to 40% compared to fixed training schedules.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-emerald-600 mb-2 italic">{item.citation}</p>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methodology Visual */}
          <section className="bg-muted/30 rounded-2xl p-8 md:p-12 border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Algorithm</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  The BioSync Energy Score isn't just a random number. It's a weighted composite index derived from 12
                  distinct physiological inputs.
                </p>
                <ul className="space-y-4">
                  {[
                    "Recovery (HRV + RHR)",
                    "Sleep Quality (Duration + Efficiency)",
                    "Sleep Debt (Chronic Load)",
                    "Strain (Activity + Stress)",
                  ].map((factor, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="font-medium">{factor}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2 bg-transparent" variant="outline">
                  Read the Whitepaper <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-80 bg-white dark:bg-zinc-950 rounded-xl shadow-lg border p-6 flex items-center justify-center">
                {/* Abstract Visualization */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-transparent dark:from-emerald-900/20 opacity-50 rounded-full blur-3xl" />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      94
                    </div>
                    <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                      Daily Energy Score
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="block h-1 w-8 bg-emerald-500 rounded-full" />
                      <span className="block h-1 w-8 bg-emerald-400 rounded-full" />
                      <span className="block h-1 w-8 bg-emerald-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
