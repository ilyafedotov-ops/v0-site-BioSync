"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Heart,
  Activity,
  Moon,
  Zap,
  Target,
  Calendar,
  ArrowUpRight,
  Minus,
} from "lucide-react"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// AI-generated trend data
const healthTrendData = [
  { date: "Mon", energy: 75, sleep: 7.2, hrv: 65, stress: 35, recovery: 70, prediction: 78 },
  { date: "Tue", energy: 72, sleep: 6.8, hrv: 62, stress: 42, recovery: 68, prediction: 74 },
  { date: "Wed", energy: 68, sleep: 6.5, hrv: 58, stress: 48, recovery: 65, prediction: 70 },
  { date: "Thu", energy: 78, sleep: 7.8, hrv: 72, stress: 28, recovery: 80, prediction: 82 },
  { date: "Fri", energy: 82, sleep: 8.1, hrv: 75, stress: 22, recovery: 85, prediction: 84 },
  { date: "Sat", energy: 85, sleep: 8.5, hrv: 78, stress: 18, recovery: 88, prediction: 87 },
  { date: "Sun", energy: 80, sleep: 8.0, hrv: 70, stress: 25, recovery: 82, prediction: 83 },
]

const riskAssessmentData = [
  { category: "Cardiovascular", score: 85, risk: "Low" },
  { category: "Metabolic", score: 72, risk: "Moderate" },
  { category: "Mental Health", score: 68, risk: "Moderate" },
  { category: "Sleep Quality", score: 90, risk: "Low" },
  { category: "Recovery", score: 78, risk: "Low" },
  { category: "Stress", score: 65, risk: "Moderate" },
]

const biometricRadarData = [
  { metric: "Sleep", current: 85, optimal: 95 },
  { metric: "HRV", current: 72, optimal: 90 },
  { metric: "RHR", current: 88, optimal: 95 },
  { metric: "Recovery", current: 78, optimal: 90 },
  { metric: "Activity", current: 70, optimal: 85 },
  { metric: "Nutrition", current: 65, optimal: 90 },
]

const predictiveAnalytics = [
  { week: "W1", actual: 72, predicted: 70, optimal: 85 },
  { week: "W2", actual: 75, predicted: 74, optimal: 85 },
  { week: "W3", actual: 78, predicted: 77, optimal: 85 },
  { week: "W4", actual: 80, predicted: 81, optimal: 85 },
  { week: "Future", actual: null, predicted: 83, optimal: 85 },
  { week: "Future+1", actual: null, predicted: 85, optimal: 85 },
  { week: "Future+2", actual: null, predicted: 87, optimal: 85 },
]

const recommendations = [
  {
    id: 1,
    priority: "high",
    category: "Sleep",
    title: "Optimize Sleep Schedule",
    description: "Your sleep quality has declined by 12% this week. Consider going to bed 30 minutes earlier.",
    impact: "+15% Energy",
    action: "Set Reminder",
  },
  {
    id: 2,
    priority: "medium",
    category: "Recovery",
    title: "Increase Recovery Time",
    description: "HRV analysis suggests you need more rest days. Add 2 active recovery sessions this week.",
    impact: "+10% HRV",
    action: "Add to Plan",
  },
  {
    id: 3,
    priority: "high",
    category: "Stress",
    title: "Stress Management",
    description: "Stress levels are 35% above baseline. Try 10-minute meditation sessions daily.",
    impact: "-25% Stress",
    action: "Start Program",
  },
  {
    id: 4,
    priority: "low",
    category: "Nutrition",
    title: "Hydration Tracking",
    description: "Your hydration levels are optimal. Maintain current water intake of 2.5L daily.",
    impact: "Maintain",
    action: "Continue",
  },
]

const insights = [
  {
    type: "positive",
    title: "Sleep Pattern Improving",
    description: "Your deep sleep duration increased by 18% compared to last week, contributing to better recovery.",
    metric: "+18%",
  },
  {
    type: "warning",
    title: "Elevated Resting Heart Rate",
    description: "RHR is 8 bpm above your baseline. This may indicate incomplete recovery or early illness.",
    metric: "+8 bpm",
  },
  {
    type: "neutral",
    title: "Activity Consistency",
    description: "You've maintained consistent activity levels. Consider progressive overload for continued gains.",
    metric: "Stable",
  },
  {
    type: "positive",
    title: "HRV Trending Up",
    description: "Heart Rate Variability shows a positive 14-day trend, indicating improved autonomic balance.",
    metric: "+12%",
  },
]

export default function AIInsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Health Analytics</h1>
            <p className="text-muted-foreground">Advanced insights powered by machine learning</p>
          </div>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82/100</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <ArrowUpRight className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-600">+5 points</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recovery Index</CardTitle>
            <Heart className="h-4 w-4 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Minus className="h-3 w-3 text-amber-600" />
              <span className="text-amber-600">Stable</span> this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Low</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-600">2 areas</span> need attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Predicted Score</CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <ArrowUpRight className="h-3 w-3 text-blue-600" />
              <span className="text-blue-600">+5 expected</span> next week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Trends & Predictions</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
        </TabsList>

        {/* Trends & Predictions Tab */}
        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>7-Day Health Trends</CardTitle>
                <CardDescription>Multi-metric analysis with AI correlation</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      name="Energy Score"
                    />
                    <Line type="monotone" dataKey="hrv" stroke="#10b981" strokeWidth={2} name="HRV" />
                    <Line type="monotone" dataKey="recovery" stroke="#8b5cf6" strokeWidth={2} name="Recovery" />
                    <Line
                      type="monotone"
                      dataKey="prediction"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Predicted"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Biometric Performance Radar</CardTitle>
                <CardDescription>Current vs. optimal health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={biometricRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="current"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.6}
                    />
                    <Radar name="Optimal" dataKey="optimal" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics - 4 Week Forecast</CardTitle>
              <CardDescription>AI-powered health score predictions based on current trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={predictiveAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="optimal"
                    stroke="#94a3b8"
                    fill="#94a3b8"
                    fillOpacity={0.2}
                    name="Optimal Range"
                  />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                    name="Actual Score"
                  />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.4}
                    strokeDasharray="5 5"
                    name="Predicted Score"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stress vs Recovery Analysis</CardTitle>
              <CardDescription>Inverse correlation tracking for optimal balance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={healthTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="recovery" fill="#10b981" name="Recovery %" />
                  <Bar dataKey="stress" fill="#ef4444" name="Stress %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Insights Tab */}
        <TabsContent value="insights" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className={
                  insight.type === "positive"
                    ? "border-emerald-200 dark:border-emerald-900"
                    : insight.type === "warning"
                      ? "border-amber-200 dark:border-amber-900"
                      : "border-blue-200 dark:border-blue-900"
                }
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {insight.type === "positive" && <TrendingUp className="h-5 w-5 text-emerald-600" />}
                      {insight.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-600" />}
                      {insight.type === "neutral" && <Activity className="h-5 w-5 text-blue-600" />}
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </div>
                    <Badge
                      variant={
                        insight.type === "positive"
                          ? "default"
                          : insight.type === "warning"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {insight.metric}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Pattern Recognition</CardTitle>
              <CardDescription>AI-detected correlations in your health data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Moon className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Sleep-Energy Correlation Detected</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your energy levels are 92% correlated with sleep quality from 2 nights prior. Prioritizing sleep
                    before high-demand days is recommended.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Activity className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Exercise Recovery Pattern</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    High-intensity workouts on consecutive days reduce your HRV by 15%. Consider spacing intense
                    sessions by 48 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Heart className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Stress Response Optimization</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meditation sessions before 10 AM reduce your daily stress score by an average of 22% and improve
                    afternoon productivity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-4">
          <div className="space-y-3">
            {recommendations.map((rec) => (
              <Card
                key={rec.id}
                className={
                  rec.priority === "high"
                    ? "border-l-4 border-l-red-500"
                    : rec.priority === "medium"
                      ? "border-l-4 border-l-amber-500"
                      : "border-l-4 border-l-blue-500"
                }
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            rec.priority === "high"
                              ? "destructive"
                              : rec.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {rec.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {rec.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Expected Impact: {rec.impact}</span>
                    </div>
                    <Button size="sm">{rec.action}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Action Plan</CardTitle>
              <CardDescription>AI-optimized daily routine for maximum health gains</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {[
                  { time: "06:30 AM", action: "Wake up at consistent time", icon: Calendar },
                  { time: "07:00 AM", action: "10-min meditation + hydration", icon: Brain },
                  { time: "10:00 AM", action: "Light exercise or walk (20 min)", icon: Activity },
                  { time: "02:00 PM", action: "Check HRV for recovery status", icon: Heart },
                  { time: "08:00 PM", action: "Begin wind-down routine", icon: Moon },
                  { time: "10:00 PM", action: "Optimal bedtime for recovery", icon: Moon },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.time}</p>
                      <p className="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risk Assessment Tab */}
        <TabsContent value="risk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Health Risk Assessment</CardTitle>
              <CardDescription>AI-powered risk analysis across key health categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={riskAssessmentData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="category" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(var(--primary))" name="Health Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {riskAssessmentData.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center justify-between">
                    {item.category}
                    <Badge
                      variant={item.risk === "Low" ? "default" : item.risk === "Moderate" ? "secondary" : "destructive"}
                    >
                      {item.risk}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Score</span>
                      <span className="font-bold text-lg">{item.score}/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          item.score >= 80 ? "bg-emerald-500" : item.score >= 60 ? "bg-amber-500" : "bg-red-500"
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Early Warning System</CardTitle>
              <CardDescription>Proactive health monitoring and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Cardiovascular Health: Optimal</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    All metrics within healthy range. Continue current exercise routine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
                <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Sleep Debt Accumulating</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You're averaging 6.5 hours vs. recommended 7.5 hours. Risk of burnout increases after 7 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Recovery Trend: Stable</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your body is adapting well to current training load. Consider progressive increase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
