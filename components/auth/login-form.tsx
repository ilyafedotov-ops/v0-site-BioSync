"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const DEMO_ACCOUNTS = {
  user: {
    email: "demo@biosync.com",
    password: "demo123",
    redirectTo: "/dashboard",
  },
  admin: {
    email: "admin@biosync.com",
    password: "admin123",
    redirectTo: "/admin",
  },
}

export function LoginForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      // Check if user or admin demo account
      if (email === DEMO_ACCOUNTS.admin.email && password === DEMO_ACCOUNTS.admin.password) {
        router.push(DEMO_ACCOUNTS.admin.redirectTo)
      } else {
        router.push(DEMO_ACCOUNTS.user.redirectTo)
      }
    }, 1500)
  }

  function quickLogin(accountType: "user" | "admin") {
    const account = DEMO_ACCOUNTS[accountType]
    setEmail(account.email)
    setPassword(account.password)
  }

  return (
    <div className="grid gap-6">
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm">
        <p className="font-medium text-blue-900 mb-2">Demo Credentials</p>
        <div className="space-y-2 text-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">User Account</p>
              <p className="text-xs">demo@biosync.com / demo123</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => quickLogin("user")}
              type="button"
              className="border-blue-300 hover:bg-blue-100"
            >
              Fill
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Admin Account</p>
              <p className="text-xs">admin@biosync.com / admin123</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => quickLogin("admin")}
              type="button"
              className="border-blue-300 hover:bg-blue-100"
            >
              Fill
            </Button>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => router.push("/dashboard"), 1500)
        }}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        )}
        Google
      </Button>
    </div>
  )
}
