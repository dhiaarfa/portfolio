"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import SocialEmbedsSection from "@/components/social-embeds-section"
import { useState } from "react"

export default function DesignerPageClient() {
  const studioManifesto = {
    title: "Studio Philosophy",
    points: [
      "Design as Strategy, Not Decoration",
      "Visual Identity as a System, Not a Logo",
      "Creativity Guided by Purpose, Clarity, and Impact",
      "Every Project Tells a Unique Brand Story",
    ]
  }

  const designPhilosophy = [
    {
      icon: "✨",
      title: "Brand Identity Systems",
      description: "We don't just create logos—we build comprehensive visual systems that evolve with your brand.",
    },
    {
      icon: "🎨",
      title: "Creative Direction",
      description: "Strategic visual thinking that aligns design decisions with business objectives and audience insights.",
    },
    {
      icon: "🖼️",
      title: "Visual Design & UI/UX",
      description: "Beautiful, functional interfaces that solve real problems and create meaningful user experiences.",
    },
    {
      icon: "📱",
      title: "Design Consulting",
      description: "Strategic guidance on visual branding, design systems, and creative direction for ambitious projects.",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "MeetUp Pro",
      url: "https://behance.net/dhiaa",
      color: "from-accent to-accent",
    },
    {
      id: 2,
      title: "Speranza Café",
      url: "https://behance.net/dhiaa",
      color: "from-[#D4A574] to-[#C8860E]",
    },
    {
      id: 3,
      title: "Business Cards",
      url: "https://behance.net/dhiaa",
      color: "from-card to-secondary",
    },
    {
      id: 4,
      title: "Walmart Packaging",
      url: "https://behance.net/dhiaa",
      color: "from-[#0E2B5F] to-[#F4B024]",
    },
    {
      id: 5,
      title: "Speranza",
      url: "https://behance.net/dhiaa",
      color: "from-[#B8860B] to-[#DAA520]",
    },
    {
      id: 6,
      title: "Football Campaign",
      url: "https://behance.net/dhiaa",
      color: "from-[#0066CC] to-[#0052A3]",
    },
  ]

  const categories = ["All", "Brand Identity", "Social Media", "Logo Design", "Packaging", "UI/UX"]
  const [activeCategory, setActiveCategory] = useState("All")

  const galleryProjects = [
    {
      title: "Walmart Branding + System",
      image: "/images/walmart-branding.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Brand Identity",
    },
    {
      title: "Tafani Travel",
      image: "/images/tafani-white-png.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Brand Identity",
    },
    {
      title: "Speranza Café",
      image: "/images/445771850-916829483581375-1053755579034856379-n.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Brand Identity",
    },
    {
      title: "Lone Space Gold Branding",
      image: "/images/lone-space-gold.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Brand Identity",
    },
    {
      title: "Lone Space Stationery",
      image: "/images/lone-space-mockup.jpg",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Packaging",
    },
    {
      title: "Lone Space Business Cards",
      image: "/images/lone-space-cards.jpg",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Logo Design",
    },
    {
      title: "MeetUp Pro Event",
      image: "/images/meetuppro-thumbnail.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Social Media",
    },
    {
      title: "Archaeological Museum Sousse",
      image: "/images/archaeological-museum-sousse.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
      category: "Brand Identity",
    },
    {
      title: "TravelTodo Billboard",
      image: "/images/billboard-48x14-ft-mockup-3.jpeg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
      category: "Social Media",
    },
    {
      title: "Football Campaign",
      image: "/images/argentina-messi-copa-america-outdoor.jpeg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
      category: "Social Media",
    },
    {
      title: "TravelTodo Poster",
      image: "/images/affiche-traveltodo.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
      category: "Social Media",
    },
    {
      title: "Our Cause Campaign",
      image: "/images/palestine.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Love & Noodles - Delivery",
      image: "/images/love-noodles-avec-livraison.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Le Vrai Amour",
      image: "/images/le-vrai-amour.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Food Campaign - Sportif",
      image: "/images/sportif-yekl-f-noodles.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "3jeja - Livraison",
      image: "/images/3jeja-livraison.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Happy Tuesday Promotion",
      image: "/images/happy-tuesday.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Valentine's Special Combo",
      image: "/images/best-combo-for-valentine.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Plat Ramen Campaign",
      image: "/images/plat-ramen.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Just Have a Taste",
      image: "/images/after-saying-just-have-taste.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Plain Studios Campaign",
      image: "/images/1_01.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Wasabi Warning",
      image: "/images/wasabi-warning.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Plain Studios Store",
      image: "/images/1_03.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Black Heavy Streetwear",
      image: "/images/1_04.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Sousse Palace Breakfast",
      image: "/images/enjoy-breakfast.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Plain Studios Comfy & Chic",
      image: "/images/1_05.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Saint Valentin",
      image: "/images/saint-valentin.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Euro 2024 Final",
      image: "/images/polaroid-frame.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Speranza Café Crème",
      image: "/images/cafe-creme.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Argentina Copa America",
      image: "/images/argentina-messi.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Speranza Benna",
      image: "/images/speranza-benna.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Speranza Pasta",
      image: "/images/speranza-pasta.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Vinyl Album Cover",
      image: "/images/vinyl-album.png",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
  ]

  const workExperience = [
    {
      title: "Zia Studio - Design Studio Operations",
      company: "Solo-led Creative Practice",
      period: "2020 – Present",
      description: "Running Zia Studio as a full-service creative design studio delivering branding, UI/UX, and visual identity systems to diverse clients",
      icon: "🎨",
    },
    {
      title: "Senior Graphic Designer",
      company: "Icom Agency",
      period: "Jan – Feb 2025",
      description: "Led design projects, contributed to brand identity systems and campaign visuals for agency clients",
      icon: "🎯",
    },
    {
      title: "Graphic Designer",
      company: "Phenyx Company",
      period: "Oct – Nov 2024",
      description: "Designed marketing materials, brand assets, and visual communications for growing tech company",
      icon: "🔧",
    },
    {
      title: "Graphic Designer",
      company: "Jasmin Marketing",
      period: "Dec 2023 – Jan 2024",
      description: "Created campaign visuals, promotional materials, and brand-consistent design assets",
      icon: "✨",
    },
    {
      title: "Design & Creative Training",
      company: "FunCoach Space, Sousse",
      period: "Jun – Jul 2021",
      description: "Delivered design training and mentored emerging designers in brand identity and visual systems",
      icon: "📚",
    },
  ]

  const certifications = [
    {
      title: "National Certified Trainer (CNFCPP)",
      issuer: "Tunisia - National Certification",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Graphic Design Certification",
      issuer: "GoMyCode Academy",
      year: "2023",
      icon: "🎭",
    },
    {
      title: "Social Media Marketing",
      issuer: "HubSpot Academy",
      year: "2024",
      icon: "📊",
    },
    {
      title: "Green Digital Skills",
      issuer: "INCO Academy",
      year: "2024",
      icon: "♻️",
    },
    {
      title: "Certified Trainer",
      issuer: "Association YOUTH CLUBs",
      year: "2025",
      icon: "👥",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-0">
        {/* Hero — full-bleed dark split */}
        <section className="min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="relative bg-slate-950 flex flex-col justify-between p-10 lg:p-16 order-2 lg:order-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#22c55e 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-green-600/10 blur-[60px]" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-11 h-11 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_2px_12px_rgba(22,163,74,0.5)]">
                <span className="text-white font-black text-xl">Z</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">Zia Studio</p>
                <p className="text-slate-500 text-xs">by Mohamed Dhia</p>
              </div>
            </div>
            <div className="relative z-10 my-auto py-10">
              <h1 className="font-display font-black text-[clamp(52px,6.5vw,88px)] leading-[0.91] text-white tracking-tight mb-6">
                Creative<br /><span className="text-green-500">Design.</span><br />Done Right.
              </h1>
              <p className="text-slate-400 text-[17px] leading-relaxed max-w-sm mb-10">
                Brand identities, visual systems, and UI/UX for organizations that want to stand out.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#gallery" className="btn-green">Browse Portfolio</a>
                <a href="#contact" className="border border-slate-700 text-slate-300 font-medium px-6 py-3 rounded-[14px] hover:border-green-500/60 hover:text-white transition-all duration-200">
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="flex gap-8 pt-8 border-t border-slate-800 relative z-10">
              {[["50+", "Projects"], ["7+", "Years"], ["20+", "Brands"]].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display font-black text-2xl text-white leading-none">{v}</p>
                  <p className="text-slate-500 text-[11px] uppercase tracking-widest mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full overflow-hidden bg-slate-900">
            <Image src="/images/photos/dhia-designer.png" alt="Dhia — Graphic Designer" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-semibold text-slate-900 dark:text-white text-sm">@zia.studioo</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Follow on Instagram</p>
            </div>
          </div>
        </section>

        {/* Zia Studio brand strip – dark background for readability */}
        <section className="w-full py-10 sm:py-14 md:py-20 px-4 md:px-8 bg-[hsl(var(--zia-green))]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-white tracking-tight px-2">Creative, done right</p>
            <p className="text-white/95 text-base sm:text-lg md:text-xl mt-3 font-medium">Thoughtful branding and visual design</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 md:mt-8">
              <a href={siteConfig.ziaStudioLinkedIn} target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm underline underline-offset-4 hover:no-underline">
                Zia Studio on LinkedIn
              </a>
              <a href={siteConfig.ziaStudioInstagram} target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm underline underline-offset-4 hover:no-underline">
                Zia Studio on Instagram
              </a>
            </div>
          </div>
        </section>

        <SocialEmbedsSection
          instagramProfileUrl={siteConfig.ziaStudioInstagram}
          behanceProfileUrl={siteConfig.behance}
        />

        {/* Design Philosophy - Enhanced Creative Section */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background via-[hsl(var(--zia-green))]/3 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">My Approach</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Design Philosophy</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-3xl">Every project is guided by core principles balancing creativity with strategy, aesthetics with impact.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {designPhilosophy.map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-[hsl(var(--zia-green))]/20 hover:border-[hsl(var(--zia-green))]/50 transition-all hover:bg-[hsl(var(--zia-green))]/5 space-y-4 backdrop-blur-sm"
                    whileHover={{ y: -4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section id="gallery" className="w-full py-12 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Portfolio</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Featured Work</h2>
              </div>

              {/* Filter tabs — horizontally scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-8 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-green-600 text-white shadow-[0_2px_8px_rgba(22,163,74,0.4)]"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Gallery grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {(activeCategory === "All" ? galleryProjects : galleryProjects.filter((p) => (p as { category?: string }).category === activeCategory)).map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-100 dark:bg-slate-800 cursor-pointer"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
                      loading={index < 6 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/65 transition-all duration-300 flex items-end p-4">
                      <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-semibold text-sm">{project.title}</p>
                        <p className="text-white/60 text-xs">{(project as { category?: string }).category || "Design"}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Experience - Compact section */}
        <section className="w-full py-20 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Professional Journey
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {workExperience.map((job, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 min-w-[160px] p-4 border border-foreground/20 bg-background rounded-lg hover:border-[hsl(var(--zia-green))]/50 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">{job.icon}</div>
                    <h3 className="text-xs font-bold leading-tight mb-1">{job.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{job.company}</p>
                    <p className="text-xs font-medium text-[hsl(var(--zia-green))]">{job.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="w-full py-20 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Professional Credentials
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="p-4 border-2 border-foreground/10 rounded-lg hover:border-[hsl(var(--zia-green))]/50 bg-background hover:bg-foreground/2 transition-all text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-2">{cert.icon}</div>
                    <h3 className="text-xs font-bold mb-1 line-clamp-2">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs font-semibold text-[hsl(var(--zia-green))]">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Software & Skills — icon badge chips */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">Tools of the Trade</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Software & Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Design Software",
                    skills: [
                      { name: "Illustrator", icon: "🎨" },
                      { name: "Photoshop", icon: "📸" },
                      { name: "InDesign", icon: "📄" },
                      { name: "Figma", icon: "🔷" },
                      { name: "After Effects", icon: "🎬" },
                    ],
                  },
                  {
                    title: "Everyday Tools",
                    skills: [
                      { name: "Canva Pro", icon: "✨" },
                      { name: "Behance", icon: "🌐" },
                      { name: "Dribbble", icon: "🏀" },
                      { name: "Notion", icon: "📋" },
                    ],
                  },
                ].map((col, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                    <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-widest mb-4">{col.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {col.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 font-medium hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                        >
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Create Something{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                Beautiful
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether it's brand identity, UI/UX design, visual campaigns, or digital content, I'm excited to
              collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <motion.a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-full font-semibold hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-500/90 transition-all"
              >
                <Calendar className="h-4 w-4" />
                {siteConfig.ctaText}
              </motion.a>
              <motion.button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Start A Design Project
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </motion.button>
              <motion.a
                href={siteConfig.behance}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border hover:border-[hsl(var(--zia-green))]/30 transition-all"
              >
                View Full Portfolio on Behance
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full py-12 md:py-24 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold">Let's Create Together</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Tell me about your project. Whether it's a brand identity, UI/UX design, or digital campaign, I'm
                  here to help.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Free design resources CTA */}
        <section className="w-full py-12 px-4 md:px-8 bg-pink-50 dark:bg-pink-950/20">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Free design templates</p>
              <p className="text-sm text-muted-foreground">
                Brand brief, color guide, and social media kit — the same tools I use with clients.
              </p>
            </div>
            <a
              href="/freebies?category=design"
              className="px-5 py-2.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              🎁 Get Free Templates
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
