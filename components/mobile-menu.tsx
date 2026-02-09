"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle" // Import ThemeToggle component

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-md">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--zia-green))] to-emerald-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">MD</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80">Mohamed Dhia</span>
          </div>
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("graphic-design-marketing")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              Design & Marketing
            </button>
            <button
              onClick={() => scrollToSection("training-capacity-building")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              Training & Capacity Building
            </button>
            <button
              onClick={() => scrollToSection("civic-work")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              Civic Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium hover:text-[hsl(var(--zia-green))] dark:hover:text-[hsl(var(--zia-green))]/80 transition-colors text-left"
            >
              Contact
            </button>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-600 hover:from-[hsl(var(--zia-green))]/90 hover:to-purple-700 transition-all"
            >
              Let's Collaborate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ThemeToggle /> {/* ThemeToggle component is now imported and used */}
        </div>
      </SheetContent>
    </Sheet>
  )
}
