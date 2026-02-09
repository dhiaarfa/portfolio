"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Mail, MapPin, Linkedin } from "lucide-react"
import PremiumGlassCard from "@/components/premium-glass-card"

interface HeroStat {
  label: string
  value: string | number
}

interface PremiumHeroProps {
  name: string
  firstName?: string
  lastName?: string
  role: string
  tagline: string
  description: string
  portraitSrc: string
  portraitAlt: string
  stats: HeroStat[]
  email: string
  linkedin: string
  location: string
  cvLink?: string
  availableForWork?: boolean
  onContactClick?: () => void
}

export default function PremiumHeroSection({
  name,
  firstName,
  lastName,
  role,
  tagline,
  description,
  portraitSrc,
  portraitAlt,
  stats,
  email,
  linkedin,
  location,
  cvLink,
  availableForWork = true,
  onContactClick,
}: PremiumHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 px-4 md:px-8">
      {/* Background gradient glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-slate-700/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Availability Badge */}
            {availableForWork && (
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-300">Open to Work</span>
              </motion.div>
            )}

            {/* Name - Editorial Style */}
            <div className="space-y-2">
              {firstName && lastName ? (
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter">
                  <span className="block text-foreground">{firstName}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                    {lastName}
                  </span>
                </h1>
              ) : (
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-foreground">
                  {name}
                </h1>
              )}
            </div>

            {/* Role & Tagline */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl font-semibold text-amber-400">{role}</p>
              <p className="text-2xl md:text-3xl font-light text-foreground/80 leading-snug">{tagline}</p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl font-light">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold flex items-center gap-2 glow-amber-hover hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </motion.button>

              {cvLink && (
                <motion.a
                  href={cvLink}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border border-amber-500/50 text-amber-400 font-semibold flex items-center gap-2 glass-hover transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-foreground/60 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{email}</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <div className="flex items-center gap-2 text-foreground/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Portrait + Glass Cards */}
          <motion.div variants={itemVariants} className="relative h-full min-h-96 lg:min-h-full">
            {/* Portrait Image with Glow */}
            <div className="relative h-full">
              {/* Ambient Glow Behind Portrait */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-600/20 to-slate-700/20 rounded-3xl blur-3xl opacity-50" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative h-full glass glass-premium rounded-3xl overflow-hidden"
              >
                <Image
                  src={portraitSrc || "/placeholder.svg"}
                  alt={portraitAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Floating Stats Cards - Positioned around portrait */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-8 top-1/4 z-20"
              >
                <PremiumGlassCard glowColor="amber" className="w-48">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Creative DNA</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{stats[0]?.value} Years of Creative Experience</p>
                  </div>
                </PremiumGlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-8 bottom-1/3 z-20"
              >
                <PremiumGlassCard glowColor="green" className="w-48">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Impact</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{stats[1]?.value} Trainees Worldwide</p>
                  </div>
                </PremiumGlassCard>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid Below */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-20 border-t border-white/10"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumGlassCard className="text-center">
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-xs md:text-sm text-foreground/60 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              </PremiumGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
