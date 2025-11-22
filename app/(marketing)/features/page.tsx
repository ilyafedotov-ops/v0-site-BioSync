import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Moon, Brain, TrendingUp, Zap, Clock, Heart, Target } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Powerful Features for Peak Performance
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Everything you need to optimize your energy, recovery, and daily performance
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Moon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Advanced Sleep Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Track all sleep stages including deep, REM, and light sleep</p>
            <p>Monitor sleep latency and efficiency metrics</p>
            <p>Identify patterns affecting sleep quality</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>HRV Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Real-time heart rate variability tracking</p>
            <p>Nervous system readiness indicators</p>
            <p>Recovery status at a glance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>AI Energy Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Personalized daily energy predictions</p>
            <p>Machine learning-powered insights</p>
            <p>Adaptive to your unique patterns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Trend Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Weekly and monthly trend visualization</p>
            <p>Correlation analysis between metrics</p>
            <p>Long-term progress tracking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Smart Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Daily personalized action plans</p>
            <p>Context-aware suggestions</p>
            <p>Adaptive coaching based on your goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Daily Journal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Log mood, stress, and activities</p>
            <p>Track subjective well-being</p>
            <p>Help AI understand your patterns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Device Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Connect Oura, Whoop, Apple Watch</p>
            <p>Automatic data synchronization</p>
            <p>Multi-device support</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Goal Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Set custom health and performance goals</p>
            <p>Track progress over time</p>
            <p>Celebrate milestones and achievements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
