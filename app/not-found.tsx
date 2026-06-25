import Link from "next/link"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-md">
          <p className="text-6xl font-display font-black text-accent mb-2">404</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Page not found</h1>
          <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed">
            This page doesn&apos;t exist or may have moved. Try the links below.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-green">
              Go home
            </Link>
            <Link href="/freebies" className="btn-outline">
              Free resources
            </Link>
            <Link href="/#contact" className="btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
