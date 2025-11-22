import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function SciencePage() {
  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">The Science Behind BioSync</h1>
          <p className="text-muted-foreground text-lg">Evidence-based insights powered by peer-reviewed research</p>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Why HRV Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Heart Rate Variability (HRV) is one of the most reliable biomarkers for autonomic nervous system health.
            Higher HRV typically indicates better cardiovascular fitness and resilience to stress, while low HRV can
            signal overtraining, illness, or chronic stress.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Key Research Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  HRV correlates with cognitive performance and emotional regulation (Thayer et al., 2009)
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Athletes with higher HRV show better training adaptability (Plews et al., 2013)
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Morning HRV measurements predict daily performance capacity (Buchheit, 2014)
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Sleep Architecture</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Quality sleep involves cycling through distinct stages: light sleep (N1, N2), deep sleep (N3), and REM
            sleep. Each stage serves unique restorative functions for physical recovery, memory consolidation, and
            emotional processing.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deep Sleep</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Critical for physical recovery, immune function, and growth hormone release
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">REM Sleep</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Essential for memory consolidation, learning, and emotional regulation
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Light Sleep</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Facilitates transitions between stages and supports general restoration
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Methodology</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BioSync's Energy Score combines multiple physiological signals using machine learning models trained on
            longitudinal health data. Our algorithm weighs sleep quality, HRV trends, resting heart rate, and subjective
            inputs to generate personalized predictions.
          </p>
          <div className="bg-muted/50 rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold">Algorithm Inputs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Sleep duration and efficiency</li>
              <li>• Time in each sleep stage</li>
              <li>• Morning HRV and resting heart rate</li>
              <li>• Previous day's activity and stress levels</li>
              <li>• Self-reported mood and energy</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Clinical Validation</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our predictive models have been validated in pilot studies with over 500 users, showing 82% accuracy in
            forecasting same-day energy levels and 76% accuracy in predicting cognitive performance on demanding tasks.
          </p>
        </section>
      </div>
    </div>
  )
}
