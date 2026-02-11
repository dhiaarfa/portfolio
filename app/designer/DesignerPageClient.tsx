"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { useState, useEffect } from "react"

const handleMouseDown = (e: any, noteId: number) => {
  // Handle mouse down logic here
}

export default function DesignerPageClient() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Every design tells a story",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 60,
      y: 180,
      rotation: 2,
    },
    {
      id: 2,
      text: "Design is problem-solving",
      color: "bg-accent dark:bg-accent",
      textColor: "text-accent-foreground",
      x: 1050,
      y: 240,
      rotation: -2,
    },
  ])


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

  const galleryProjects = [
    {
      title: "Walmart Packaging",
      image: "/images/free-paper-square-box-mockup-recovered.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Tafani Travel",
      image: "/images/tafani-white-png.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Speranza Café",
      image: "/images/445771850-916829483581375-1053755579034856379-n.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Walmart Branding",
      image: "/images/walmart.jpg",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Walmart Branding System",
      image: "/images/walmart-branding.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Lone Space Gold Branding",
      image: "/images/lone-space-gold.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Lone Space Stationery",
      image: "/images/lone-space-mockup.jpg",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Lone Space Business Cards",
      image: "/images/lone-space-cards.jpg",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "MeetUp Pro Event",
      image: "/images/meetuppro-thumbnail.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "Archaeological Museum Sousse",
      image: "/images/archaeological-museum-sousse.png",
      url: "https://behance.net/dhiaa",
      size: "primary",
    },
    {
      title: "TravelTodo Billboard",
      image: "/images/billboard-48x14-ft-mockup-3.jpeg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "Football Campaign",
      image: "/images/argentina-messi-copa-america-outdoor.jpeg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
    },
    {
      title: "TravelTodo Poster",
      image: "/images/affiche-traveltodo.jpg",
      url: "https://behance.net/dhiaa",
      size: "secondary",
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

      <main className="w-full pt-20">
        {/* Hero Section - balanced content and image */}
        <section className="relative w-full min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-b from-background via-background to-background/70">
          {/* Zia layered background */}
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
            <div className="absolute -left-32 -top-32 w-72 h-72 bg-[hsl(var(--zia-green))]/20 rounded-full blur-3xl" />
            <div className="absolute right-0 top-20 w-80 h-80 bg-[hsl(var(--zia-green))]/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
              {/* Left: Text content - same visual weight as image */}
              <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1 relative">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <div className="flex justify-center md:justify-start">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/222-u48A4T9GJlR5FkrkiUgVmcx3GY05RE.png" alt="Zia Studio" width={160} height={160} className="h-36 w-auto object-contain" priority />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-2 leading-tight">
                    Zia Studio
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-4">
                    Creative Design Studio
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-4 mx-auto md:mx-0">
                    Brand Identity • Visual Systems • UI/UX • Creative Direction
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Founded and led by <span className="font-semibold text-foreground">Mohamed Dhia Arfa</span>
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={siteConfig.ziaStudioLinkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline">
                      Zia Studio on LinkedIn
                    </a>
                    <a href={siteConfig.ziaStudioInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline">
                      Zia Studio on Instagram
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center md:justify-start">
                  <Link
                    href="#gallery"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all touch-manipulation"
                  >
                    See Work
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </motion.div>
                <div className="flex justify-center md:justify-start mt-4">
                  <button
                    type="button"
                    onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-foreground/20 bg-background/80 text-xs font-medium hover:border-[hsl(var(--zia-green))]/60 hover:text-[hsl(var(--zia-green))] transition-colors touch-manipulation"
                  >
                    View featured work ↓
                  </button>
                </div>
              </div>
              {/* Right: Portrait - same column width, constrained size */}
              <motion.div
                className="flex items-center justify-center order-1 md:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-xl bg-card">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-dhia-%282%29-GYOWxbEnyOKrobIBDVx9xwfpQFfYMn.png"
                    alt="Mohamed Dhia Arfa - Graphic Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Notes - Hidden on small screens */}
        <div className="hidden lg:block absolute top-4 right-4 space-y-0 my-[85px] pointer-events-none">
          {notes.slice(0, 2).map((note) => (
            <motion.div
              key={note.id}
              className={`${note.color} w-40 p-4 rounded-lg shadow-lg text-sm font-medium text-foreground/80 select-none`}
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: note.rotation }}
              transition={{ duration: 0.6, delay: note.id * 0.1 }}
            >
              {note.text}
            </motion.div>
          ))}
        </div>

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

              {/* Gallery by importance: primary = logos/identity (larger), secondary = posters/campaigns (smaller) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {galleryProjects.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 hover:border-[hsl(var(--zia-green))]/30 transition-all cursor-pointer ${
                      project.size === "primary" ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-video md:aspect-square w-full overflow-hidden bg-foreground/10 relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="font-bold text-white text-lg">{project.title}</h3>
                        <p className="text-white/80 text-sm">View on Behance →</p>
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

        {/* Software & Skills */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest opacity-70 uppercase">Tools of the Trade</p>
                <h2 className="text-4xl md:text-5xl font-bold">Software & Skills</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    category: "Design Software",
                    tools: [
                      "Adobe Photoshop",
                      "Adobe Illustrator",
                      "Adobe InDesign",
                      "Adobe Premiere Pro",
                      "Canva",
                      "2D Animation",
                    ],
                  },
                  {
                    category: "UI/UX Design",
                    tools: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
                  },
                ].map((group, i) => (
                  <motion.div
                    key={i}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold">{group.category}</h3>
                    <ul className="space-y-2">
                      {group.tools.map((tool, j) => (
                        <li key={j} className="text-sm opacity-90 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-background rounded-full"></span>
                          {tool}
                        </li>
                      ))}
                    </ul>
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--zia-green))] text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
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
      </main>

      <Footer />
    </div>
  )
}
