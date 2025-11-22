import Link from "next/link"
import { Activity, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Activity className="h-6 w-6 text-primary" />
              <span>BioSync</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Optimize your energy. Master your sleep. Perform at your peak.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Product</h3>
            <Link href="/features" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/science" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Methodology
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/download" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Download App
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Company</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Careers
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Legal</h3>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BioSync Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">Medical Disclaimer: BioSync is not a medical device.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
