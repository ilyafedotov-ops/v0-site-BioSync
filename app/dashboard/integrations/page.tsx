"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Cloud, CheckCircle2, AlertCircle, RefreshCw, Settings, Download, Upload } from "lucide-react"

// Mock data for integrations
const integrations = [
  {
    id: "apple-health",
    name: "Apple Health",
    icon: "🍎",
    category: "Mobile App",
    status: "connected",
    lastSync: "2 minutes ago",
    metrics: ["Steps", "Heart Rate", "Sleep", "Workouts", "Active Energy"],
    autoSync: true,
    color: "bg-black",
  },
  {
    id: "oura",
    name: "Oura Ring",
    icon: "⭕",
    category: "Wearable",
    status: "connected",
    lastSync: "15 minutes ago",
    metrics: ["Sleep Stages", "HRV", "Body Temperature", "Readiness Score"],
    autoSync: true,
    color: "bg-slate-700",
  },
  {
    id: "garmin",
    name: "Garmin Connect",
    icon: "🔷",
    category: "Wearable",
    status: "disconnected",
    lastSync: null,
    metrics: ["GPS Activities", "Body Battery", "Stress", "VO2 Max"],
    autoSync: false,
    color: "bg-blue-900",
  },
  {
    id: "fitbit",
    name: "Fitbit",
    icon: "💚",
    category: "Wearable",
    status: "disconnected",
    lastSync: null,
    metrics: ["Steps", "Heart Rate", "Sleep", "Active Zone Minutes"],
    autoSync: false,
    color: "bg-green-600",
  },
  {
    id: "whoop",
    name: "WHOOP",
    icon: "⚡",
    category: "Wearable",
    status: "disconnected",
    lastSync: null,
    metrics: ["Strain", "Recovery", "Sleep Performance", "HRV"],
    autoSync: false,
    color: "bg-black",
  },
  {
    id: "google-fit",
    name: "Google Fit",
    icon: "🏃",
    category: "Mobile App",
    status: "disconnected",
    lastSync: null,
    metrics: ["Steps", "Heart Points", "Activities", "Weight"],
    autoSync: false,
    color: "bg-red-500",
  },
  {
    id: "strava",
    name: "Strava",
    icon: "🚴",
    category: "Fitness App",
    status: "connected",
    lastSync: "1 hour ago",
    metrics: ["Activities", "Distance", "Pace", "Elevation"],
    autoSync: true,
    color: "bg-orange-600",
  },
  {
    id: "myfitnesspal",
    name: "MyFitnessPal",
    icon: "🍽️",
    category: "Nutrition",
    status: "disconnected",
    lastSync: null,
    metrics: ["Calories", "Macros", "Water", "Weight"],
    autoSync: false,
    color: "bg-blue-600",
  },
]

const syncHistory = [
  { source: "Apple Health", timestamp: "2024-01-15 09:30 AM", records: 1247, status: "success" },
  { source: "Oura Ring", timestamp: "2024-01-15 09:15 AM", records: 84, status: "success" },
  { source: "Strava", timestamp: "2024-01-15 08:00 AM", records: 3, status: "success" },
  { source: "Apple Health", timestamp: "2024-01-14 11:30 PM", records: 1189, status: "success" },
  { source: "Oura Ring", timestamp: "2024-01-14 11:15 PM", records: 82, status: "warning" },
]

export default function IntegrationsPage() {
  const [integrationList, setIntegrationList] = useState(integrations)

  const connectedCount = integrationList.filter((i) => i.status === "connected").length
  const totalMetrics = integrationList
    .filter((i) => i.status === "connected")
    .reduce((sum, i) => sum + i.metrics.length, 0)

  const toggleConnection = (id: string) => {
    setIntegrationList(
      integrationList.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              status: integration.status === "connected" ? "disconnected" : "connected",
              lastSync: integration.status === "connected" ? null : "Just now",
            }
          : integration,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Data Integrations</h2>
          <p className="text-muted-foreground">Connect your devices and apps to sync health data automatically.</p>
        </div>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Sync All
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connected Sources</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{connectedCount}</div>
            <p className="text-xs text-muted-foreground">
              {integrationList.length - connectedCount} available to connect
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Metrics</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMetrics}</div>
            <p className="text-xs text-muted-foreground">Data points being tracked</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m</div>
            <p className="text-xs text-muted-foreground">Auto-sync enabled</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Sources</TabsTrigger>
          <TabsTrigger value="connected">Connected</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="history">Sync History</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {integrationList.map((integration) => (
              <Card key={integration.id} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-lg ${integration.color} flex items-center justify-center text-2xl`}
                      >
                        {integration.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <CardDescription>{integration.category}</CardDescription>
                      </div>
                    </div>
                    {integration.status === "connected" ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    ) : (
                      <Badge variant="outline">Not Connected</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Available Metrics:</p>
                    <div className="flex flex-wrap gap-1">
                      {integration.metrics.map((metric) => (
                        <Badge key={metric} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {integration.status === "connected" && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last sync: {integration.lastSync}</span>
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`auto-${integration.id}`} className="text-xs">
                          Auto-sync
                        </Label>
                        <Switch id={`auto-${integration.id}`} defaultChecked={integration.autoSync} />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant={integration.status === "connected" ? "destructive" : "default"}
                      className="flex-1"
                      onClick={() => toggleConnection(integration.id)}
                    >
                      {integration.status === "connected" ? "Disconnect" : "Connect"}
                    </Button>
                    {integration.status === "connected" && (
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="connected" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {integrationList
              .filter((i) => i.status === "connected")
              .map((integration) => (
                <Card key={integration.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-12 w-12 rounded-lg ${integration.color} flex items-center justify-center text-2xl`}
                        >
                          {integration.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <CardDescription>Last sync: {integration.lastSync}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => toggleConnection(integration.id)}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Sync Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {integrationList
              .filter((i) => i.status === "disconnected")
              .map((integration) => (
                <Card key={integration.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-lg ${integration.color} flex items-center justify-center text-2xl`}
                      >
                        {integration.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <CardDescription>{integration.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect to sync {integration.metrics.length} metrics automatically
                    </p>
                    <Button className="w-full" onClick={() => toggleConnection(integration.id)}>
                      Connect {integration.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sync Activity</CardTitle>
              <CardDescription>View your data synchronization history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {syncHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          item.status === "success" ? "bg-green-100" : "bg-yellow-100"
                        }`}
                      >
                        {item.status === "success" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.source}</p>
                        <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{item.records} records</p>
                      <p className="text-xs text-muted-foreground capitalize">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Export/Import */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Export Data</CardTitle>
                <CardDescription>Download all your health data</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Export as CSV
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Import Data</CardTitle>
                <CardDescription>Upload data from other sources</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Import CSV
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
