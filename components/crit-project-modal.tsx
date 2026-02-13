"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface CritProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CritProjectModal({ isOpen, onClose }: CritProjectModalProps) {
  // CRIT website screenshots - actual screenshots from the project
  const critScreenshots = [
    {
      title: "Homepage - Job Search & Hero Section",
      image: "/images/crit-screenshots/homepage.png",
      description: "Modern homepage featuring prominent job search interface with keyword and location filters. Hero section showcases value proposition for both job seekers and companies with clear CTAs.",
    },
    {
      title: "Candidates Page - Job Listings",
      image: "/images/crit-screenshots/candidates.png",
      description: "Dedicated candidates section displaying featured job offers in CDI/CDD contracts. Clean card-based layout with job details, location, contract type, and quick apply functionality.",
    },
    {
      title: "Companies Page - Recruitment Services",
      image: "/images/crit-screenshots/companies.png",
      description: "Company-focused page highlighting recruitment services. Features service cards (Rapid Recruitment, Skills Assessment, RPO, HR Consulting) with clear value propositions and CTA buttons.",
    },
    {
      title: "Solutions Page - Service Offerings",
      image: "/images/crit-screenshots/solutions.png",
      description: "Comprehensive solutions page showcasing HR services. Four main service categories with detailed descriptions, icons, and quote request buttons. Includes mid-page CTA and integrated contact form.",
    },
    {
      title: "Contact Page - Form & Information",
      image: "/images/crit-screenshots/contact.png",
      description: "Dual-column contact page with company information (address, phone, email, hours) on left and functional contact form on right. Includes file attachment capability with format restrictions (PDF, DOC, DOCX, max 5MB).",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 md:inset-4 lg:inset-8 z-50 bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">CRIT Tunisie</h2>
                <p className="text-sm text-gray-600 mt-1">Corporate Recruitment Platform - Next.js Development</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-white">
              <div className="max-w-5xl mx-auto space-y-12">
                {/* Technical Project Description */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Technical Implementation</h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Developed a comprehensive corporate recruitment platform for CRIT Tunisie using <strong>Next.js 15</strong> with <strong>React</strong> and <strong>TypeScript</strong>. 
                      The platform serves dual audiences: job seekers and companies, with distinct user flows and dedicated sections.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Key Technical Features:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                      <li><strong>Multi-page Architecture:</strong> Implemented separate pages for candidates, companies, solutions, and contact with optimized routing</li>
                      <li><strong>Job Search Interface:</strong> Built search functionality with keyword and location filters, displaying results in card-based layouts</li>
                      <li><strong>Service Showcase:</strong> Created interactive service cards with hover effects, clear CTAs, and detailed descriptions</li>
                      <li><strong>Contact Form:</strong> Developed form with validation, file upload (PDF/DOC/DOCX, max 5MB), and integration with email service</li>
                      <li><strong>Responsive Design:</strong> Ensured mobile-first approach with breakpoints for tablet and desktop views</li>
                      <li><strong>Performance Optimization:</strong> Implemented image optimization, code splitting, and lazy loading for fast page loads</li>
                      <li><strong>SEO Implementation:</strong> Added meta tags, structured data, and semantic HTML for better search visibility</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      Next.js 15
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      Responsive Design
                    </span>
                  </div>
                </div>

                {/* Screenshots - One under the other in large format */}
                <div className="space-y-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Website Pages & Features</h3>
                  <div className="space-y-10">
                    {critScreenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4 bg-white rounded-lg border border-gray-200 p-4 md:p-6"
                      >
                        <div>
                          <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-900">{screenshot.title}</h4>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">{screenshot.description}</p>
                        </div>
                        {/* Large screenshot - full width, readable */}
                        <div className="relative w-full rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-50 shadow-sm">
                          <div className="relative w-full" style={{ minHeight: "400px" }}>
                            <Image
                              src={screenshot.image}
                              alt={screenshot.title}
                              fill
                              className="object-contain object-top"
                              sizes="100vw"
                              priority={index < 2}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Development Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Responsive design optimized for mobile, tablet, and desktop",
                      "Job search with keyword and location filtering",
                      "Dual user flows (candidates vs companies)",
                      "Service showcase with interactive cards",
                      "Contact form with file upload validation",
                      "Performance optimized with Next.js Image component",
                      "SEO-friendly structure with semantic HTML",
                      "Accessible UI with proper ARIA labels",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-[hsl(var(--zia-green))] text-lg font-bold shrink-0">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href="https://crit-tunisie.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-lg font-semibold hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-500/90 transition-all"
                  >
                    Visit Live Site
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
