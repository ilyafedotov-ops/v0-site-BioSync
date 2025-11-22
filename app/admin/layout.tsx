import type React from "react"
import Link from "next/link"
import { Zap, LayoutDashboard, Users, FileText, Activity, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 border-r bg-slate-900 text-white hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
             <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                <Zap className="h-3 w-3 text-slate-900" />
             </div>
             BioSync Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-slate-800 hover:text-white">
                    <LayoutDashboard className="h-4 w-4" />
                    Overview
                </Button>
            </Link>
            <Link href="/admin/users">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-slate-800 hover:text-white">
                    <Users className="h-4 w-4" />
                    Users
                </Button>
            </Link>
            <Link href="/admin/cms">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-slate-800 hover:text-white">
                    <FileText className="h-4 w-4" />
                    Content
                </Button>
            </Link>
            <Link href="/admin/system">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-slate-800 hover:text-white">
                    <Activity className="h-4 w-4" />
                    System
                </Button>
            </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
             <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start gap-2 text-slate-400 hover:bg-slate-800 hover:text-white">
                    <LogOut className="h-4 w-4" />
                    Exit Admin
                </Button>
             </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
          <header className="h-16 border-b flex items-center justify-between px-4 md:px-6 bg-background sticky top-0 z-10">
              <div className="md:hidden flex items-center gap-2 font-bold">
                 Admin Panel
              </div>
              <div className="flex items-center gap-4 ml-auto">
                 <div className="text-xs text-muted-foreground">Logged in as <span className="font-medium">admin@biosync.io</span></div>
                 <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium text-sm">
                    AD
                 </div>
              </div>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-slate-50">
             {children}
          </main>
      </div>
    </div>
  )
}
