import type React from "react"
import Link from "next/link"
import { Zap, LayoutDashboard, BookOpen, BarChart2, Settings, LogOut, Bell, Cloud, Brain, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-muted/5">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r bg-card/50 backdrop-blur-xl hidden md:flex flex-col fixed h-full z-20">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg text-primary">
            <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            BioSync
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="text-xs font-semibold text-muted-foreground mb-4 px-2 uppercase tracking-wider">Overview</div>
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/journal">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <BookOpen className="h-4 w-4" />
              Daily Journal
            </Button>
          </Link>

          <div className="text-xs font-semibold text-muted-foreground mb-4 px-2 uppercase tracking-wider mt-8">
            Analytics
          </div>
          <Link href="/dashboard/ai-insights">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <Brain className="h-4 w-4" />
              AI Insights
            </Button>
          </Link>
          <Link href="/dashboard/reports">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <BarChart2 className="h-4 w-4" />
              Reports
            </Button>
          </Link>

          <div className="text-xs font-semibold text-muted-foreground mb-4 px-2 uppercase tracking-wider mt-8">
            System
          </div>
          <Link href="/dashboard/integrations">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <Cloud className="h-4 w-4" />
              Integrations
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-medium"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
        <div className="p-4 border-t bg-card/30">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="flex-1 flex flex-col md:pl-64 transition-all duration-300">
        <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-10">
          <div className="md:hidden flex items-center gap-2 font-bold text-primary">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                {/* Mobile Sidebar Content */}
                <div className="h-16 flex items-center px-6 border-b">
                  <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg text-primary">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    BioSync
                  </Link>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                  <Link href="/dashboard">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </Button>
                  </Link>
                  <Link href="/dashboard/journal">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <BookOpen className="h-4 w-4" /> Daily Journal
                    </Button>
                  </Link>
                  <Link href="/dashboard/ai-insights">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Brain className="h-4 w-4" /> AI Insights
                    </Button>
                  </Link>
                  <Link href="/dashboard/reports">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <BarChart2 className="h-4 w-4" /> Reports
                    </Button>
                  </Link>
                  <Link href="/dashboard/integrations">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Cloud className="h-4 w-4" /> Integrations
                    </Button>
                  </Link>
                  <Link href="/dashboard/settings">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Settings className="h-4 w-4" /> Settings
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            BioSync
          </div>

          <div className="hidden md:flex items-center text-sm text-muted-foreground">
            <span className="px-2">Dashboard</span> / <span className="px-2 font-medium text-foreground">Overview</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Button variant="outline" size="icon" className="rounded-full bg-background border-muted hover:bg-muted">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">James Anderson</p>
                <p className="text-xs text-muted-foreground">Premium User</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-medium text-sm text-primary border border-primary/20">
                JA
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in-50 duration-500">{children}</div>
        </main>
      </div>
    </div>
  )
}
