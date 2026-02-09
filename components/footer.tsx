"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full py-16 md:py-20 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Mohamed Dhia</h3>
            <p className="text-sm text-muted-foreground">
              Professional trainer in youth development and social justice advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Update with correct contact information*/}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:mohameddhiaarfa@gmail.com" className="hover:text-foreground transition-colors">
                  mohameddhiaarfa@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm">Based in Tunisia</p>
              </li>
            </ul>
          </div>

          {/* Social - Add correct LinkedIn and Instagram links*/}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/dhia-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/zia.studioo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Link
                href="mailto:mohameddhiaarfa@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Mohamed Dhia Arfa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
