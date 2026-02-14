"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

interface BdafProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BdafProjectModal({ isOpen, onClose }: BdafProjectModalProps) {
  // Best Dates & Fruits website screenshots - actual screenshots from the project
  const bdafScreenshots = [
    {
      title: "Homepage - Brand Story & Hero",
      image: "/images/bdaf-screenshots/homepage.png",
      description: "Compelling homepage featuring company history, premium Tunisian dates showcase, certifications (ISO 22000, Halal), and artisanal excellence section. Clean hero section with brand messaging and product highlights.",
    },
    {
      title: "Products Page - Date Catalog",
      image: "/images/bdaf-screenshots/products.png",
      description: "Comprehensive product catalog with category filters (Branchée, Standard, Conditionnées, Variétés Locales, Transformées). Each product card displays images, descriptions, packaging options, and quote request CTAs.",
    },
    {
      title: "Ingredients Page - Industrial Products",
      image: "/images/bdaf-screenshots/ingredients.png",
      description: "B2B-focused ingredients page showcasing date-based products for food industry. Features certification badges (ISO 22000, Halal, Organic, Export), category filters, and detailed product cards with technical specifications.",
    },
    {
      title: "Pastries Page - Artisanal Collection",
      image: "/images/bdaf-screenshots/pastries.png",
      description: "Visual gallery of artisanal date pastries and sweets. Grid layout displaying diverse products with custom order CTA section. Showcases traditional and innovative pastry creations.",
    },
    {
      title: "Fruits Page - Fresh Produce",
      image: "/images/bdaf-screenshots/fruits.png",
      description: "Seasonal fresh fruits showcase with premium quality messaging. Large image grid (5x4) displaying various fruits. Includes seasonal supply partnership section for catering and distribution professionals.",
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

          {/* Modal - near full viewport on large screens so screenshots are readable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 md:inset-3 lg:inset-2 xl:inset-[0.5rem] z-50 bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white shrink-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Best Dates & Fruits</h2>
                <p className="text-sm text-gray-600 mt-1">Premium Tunisian Dates E-commerce Platform - Next.js Development</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Content - Scrollable, wide for readable screenshots */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:px-8 lg:py-6 bg-white">
              <div className="max-w-[1920px] mx-auto space-y-12">
                {/* Technical Project Description */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Technical Implementation</h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Developed a comprehensive e-commerce and marketing platform for Best Dates & Fruits, a premium Tunisian dates exporter. 
                      Built with <strong>Next.js 15</strong> and <strong>React</strong>, the platform serves both B2C customers and B2B industrial clients.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Key Technical Features:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                      <li><strong>Multi-Section Product Catalog:</strong> Implemented separate pages for products, ingredients, pastries, and fruits with category filtering</li>
                      <li><strong>Product Management:</strong> Built detailed product cards with images, descriptions, packaging options, technical specs, and quote request functionality</li>
                      <li><strong>Certification Display:</strong> Integrated certification badges (ISO 22000, Halal, Organic) with visual icons and clear messaging</li>
                      <li><strong>Image Gallery System:</strong> Created optimized grid layouts for product showcases with lazy loading and responsive sizing</li>
                      <li><strong>B2B Features:</strong> Developed ingredients page targeting food industry with technical product information</li>
                      <li><strong>Quote Request System:</strong> Implemented quote request forms across product pages with category-specific CTAs</li>
                      <li><strong>Multi-language Support:</strong> Built language selector (French/Arabic) for international market reach</li>
                      <li><strong>Performance Optimization:</strong> Optimized images, implemented code splitting, and ensured fast page loads</li>
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
                      E-commerce
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      Product Catalog
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full text-sm font-medium">
                      B2B Platform
                    </span>
                  </div>
                </div>

                {/* Screenshots - Near full internal width, large min-height for readability */}
                <div className="space-y-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Website Pages & Features</h3>
                  <div className="space-y-12">
                    {bdafScreenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4"
                      >
                        <div className="px-0">
                          <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-900">{screenshot.title}</h4>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">{screenshot.description}</p>
                        </div>
                        {/* Full-width screenshot at high resolution so text stays sharp (Next Image optimization) */}
                        <div className="w-full rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-100 shadow-md ring-1 ring-gray-200/50">
                          <Image
                            src={screenshot.image}
                            alt={screenshot.title}
                            width={1920}
                            height={6000}
                            className="w-full h-auto block"
                            style={{ width: "100%", height: "auto" }}
                            sizes="(min-width: 1280px) 90vw, (min-width: 1024px) 85vw, 100vw"
                            priority={index < 2}
                            quality={95}
                          />
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
                      "Multi-page product catalog with category filtering",
                      "B2B ingredients page for food industry clients",
                      "Artisanal pastries gallery with custom order system",
                      "Fresh fruits showcase with seasonal messaging",
                      "Certification badges and trust indicators",
                      "Quote request forms across all product pages",
                      "Multi-language support (French/Arabic)",
                      "Responsive design for all device sizes",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-[hsl(var(--zia-green))] text-lg font-bold shrink-0">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                  <a
                    href="https://bestdatesandfruits.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-lg font-semibold hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-500/90 transition-all"
                  >
                    Visit Live Site
                    <span>↗</span>
                  </a>
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[hsl(var(--zia-green))] text-[hsl(var(--zia-green))] rounded-lg font-semibold hover:bg-[hsl(var(--zia-green))]/10 transition-colors"
                  >
                    Discuss a similar project
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
