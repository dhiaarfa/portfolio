"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"

const getStats = () => [
  { 
    number: "1000+", 
    label: "Learners Trained", 
    icon: "👥" 
  },
  { 
    number: "450+", 
    label: "Hours Facilitated", 
    icon: "⏱️" 
  },
  { 
    number: "70+", 
    label: "Events Organized", 
    icon: "📅" 
  },
  { 
    number: "7+", 
    label: "Years Experience", 
    icon: "⭐" 
  },
]

const getPrograms = () => [
  {
    title: "Youth Leadership Development",
    description: "Empowering young leaders through intensive workshops and mentoring",
    icon: "🎯",
  },
  {
    title: "Social Justice Training",
    description: "Building awareness and skills for positive social change",
    icon: "✊",
  },
  {
    title: "Career Development",
    description: "Guiding professionals through skills enhancement and career growth",
    icon: "🚀",
  },
]

export default function TrainerPageClient() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Empowering tomorrow's leaders",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 80,
      y: 160,
      rotation: 3,
    },
    {
      id: 2,
      text: "1000+ Learners",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 750,
      y: 190,
      rotation: -2,
    },
    {
      id: 3,
      text: "450+ Hours Facilitated",
      color: "bg-yellow-300 dark:bg-yellow-400",
      textColor: "text-black",
      x: 200,
      y: 1000,
      rotation: 1,
    },
    {
      id: 4,
      text: "70+ Events",
      color: "bg-purple-400 dark:bg-purple-500",
      textColor: "text-white",
      x: 650,
      y: 1100,
      rotation: -3,
    },
    {
      id: 5,
      text: "7+ Years",
      color: "bg-pink-400 dark:bg-pink-500",
      textColor: "text-white",
      x: 300,
      y: 850,
      rotation: 2,
    },
  ])

  const [draggingId, setDraggingId] = useState(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e, id) => {
    setDraggingId(id)
    const note = notes.find((n) => n.id === id)
    setDragOffset({
      x: e.clientX - note.x,
      y: e.clientY - note.y,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (draggingId === null) return

      setNotes((prev) =>
        prev.map((note) =>
          note.id === draggingId
            ? {
                ...note,
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y,
              }
            : note,
        ),
      )
    }

    const handleMouseUp = () => {
      setDraggingId(null)
    }

    if (draggingId !== null) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [draggingId, dragOffset])

  const trainerServices = [
    {
      icon: "📋",
      title: "Training Module Design",
      description: "Create structured training modules tailored to specific needs and objectives",
    },
    {
      icon: "📖",
      title: "Manual & Resource Development",
      description: "Develop comprehensive training manuals and educational materials",
    },
    {
      icon: "👥",
      title: "Training Supervision & Analysis",
      description: "Oversee training sessions and analyze their effectiveness and impact",
    },
    {
      icon: "🎓",
      title: "Beginning Trainer Mentoring",
      description: "Guide and develop emerging trainers to build their facilitation skills",
    },
    {
      icon: "💬",
      title: "Soft Skills Coaching",
      description: "Individual and group coaching on communication, leadership, and soft skills",
    },
    {
      icon: "🎯",
      title: "Individual & Collective Coaching",
      description: "Personalized coaching sessions for professional and personal development",
    },
  ]

  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setLanguage(savedLang)

    const handleLanguageChange = () => {
      const newLang = localStorage.getItem("language") || "en"
      setLanguage(newLang)
    }

    window.addEventListener("storage", handleLanguageChange)
    return () => window.removeEventListener("storage", handleLanguageChange)
  }, [])

  return (
    <div className="w-full min-h-screen bg-background relative">
      <Navbar />

      {notes.map((note) => (
        <motion.div
          key={note.id}
          className={`fixed ${note.color} p-3 rounded-lg shadow-lg max-w-40 text-xs font-bold cursor-move select-none hover:shadow-xl transition-shadow border border-white/20`}
          style={{
            left: `${note.x}px`,
            top: `${note.y}px`,
            transform: `rotate(${note.rotation}deg)`,
            zIndex: draggingId === note.id ? 50 : 10,
          }}
          onMouseDown={(e) => handleMouseDown(e, note.id)}
          whileHover={{ scale: 1.05 }}
        >
          <span className={note.textColor}>{note.text}</span>
        </motion.div>
      ))}

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 md:py-0 px-4 md:px-8 bg-gradient-to-br from-[hsl(var(--zia-green))]/5 via-background to-emerald-50">
          <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-120px)]">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex gap-3 flex-wrap">
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">
                      {language === "fr" ? "FORMATEUR CERTIFIÉ" : language === "ar" ? "مدرب معتمد" : "CERTIFIED TRAINER"}
                    </div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">
                      {language === "fr" ? "1000+ APPRENANTS" : language === "ar" ? "1000+ متعلم" : "1000+ LEARNERS"}
                    </div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">
                      {language === "fr" ? "70+ ÉVÉNEMENTS" : language === "ar" ? "70+ حدث" : "70+ EVENTS"}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      {language === "fr" ? "Formateur" : language === "ar" ? "مدرب" : "Professional"}{" "}
                      <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] via-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                        {language === "fr" ? "Professionnel" : language === "ar" ? "محترف" : "Trainer"}
                      </span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                      {language === "fr" 
                        ? "Autonomiser les leaders et transformer les communautés"
                        : language === "ar"
                        ? "تمكين القادة وتغيير المجتمعات"
                        : "Empowering leaders and changing communities"}
                    </h2>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground max-w-md">
                    {language === "fr"
                      ? "Formateur professionnel certifié avec 7+ ans d'expérience. Spécialisé dans le développement des jeunes, la formation au leadership, le plaidoyer pour la justice sociale et l'engagement communautaire."
                      : language === "ar"
                      ? "مدرب محترف معتمد بخبرة 7 سنوات. متخصص في تطوير الشباب وتدريب القيادة والدعوة للعدالة الاجتماعية والمشاركة المجتمعية."
                      : "Certified professional trainer with 7+ years of experience. Specialized in youth development, leadership training, social justice advocacy, and community engagement across multiple organizations and platforms."}
                  </p>

                  <motion.div className="pt-4 flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/dhia-/"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--zia-green)))] text-background rounded-lg font-medium hover:bg-[hsl(var(--zia-green))]/90 transition-colors"
                      rel="noopener noreferrer"
                    >
                      {language === "fr" ? "Connecter sur LinkedIn" : language === "ar" ? "الاتصال عبر LinkedIn" : "Connect on LinkedIn"}
                    </a>
                    <motion.button
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
                    >
                      {language === "fr" ? "Demander une Formation" : language === "ar" ? "طلب التدريب" : "Request Training"}
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex justify-center relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-full max-w-sm">
                    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-foreground/20 shadow-xl bg-white dark:bg-slate-900">
                      <Image
                        src="/images/photo-dhia-282-29.png"
                        alt="Mohamed Dhia Arfa - Professional Trainer"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background to-[hsl(var(--zia-green))]/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {getStats().map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-2xl border-2 border-[hsl(var(--zia-green))]/30 bg-gradient-to-br from-[hsl(var(--zia-green))]/5 to-transparent hover:border-[hsl(var(--zia-green))]/60 text-center space-y-4 transition-all"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl">{stat.icon}</div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">{stat.number}</h3>
                  <p className="text-muted-foreground font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  {language === "fr" ? "Axe de Formation" : language === "ar" ? "تركيز التدريب" : "Training Focus"}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {language === "fr" ? "Programmes Spécialisés" : language === "ar" ? "برامج متخصصة" : "Specialized Programs"}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {getPrograms().map((program, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-3xl border-2 border-[hsl(var(--zia-green))]/30 hover:border-[hsl(var(--zia-green))]/60 transition-all hover:bg-[hsl(var(--zia-green))]/5 space-y-4"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl">{program.icon}</div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trainer Services Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-[hsl(var(--zia-green))]/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  {language === "fr" ? "Mes Capacités" : language === "ar" ? "قدراتي" : "My Expertise"}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {language === "fr" ? "Services de Formation" : language === "ar" ? "خدمات التدريب" : "Training Services & Expertise"}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  {language === "fr" 
                    ? "Offre complète de services pour concevoir, superviser et optimiser vos programmes de formation" 
                    : language === "ar"
                    ? "مجموعة شاملة من الخدمات لتصميم والإشراف وتحسين برامج التدريب الخاصة بك"
                    : "Comprehensive services to design, supervise, and optimize your training programs"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainerServices.map((service, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-2xl border border-[hsl(var(--zia-green))]/30 hover:border-[hsl(var(--zia-green))]/60 bg-card hover:bg-[hsl(var(--zia-green))]/5 transition-all space-y-4"
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              {language === "fr" 
                ? "Prêt à Transformer par la "
                : language === "ar"
                ? "هل أنت جاهز للتحول من خلال "
                : "Ready to Transform Through "}
              <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-400 bg-clip-text text-transparent">
                {language === "fr" 
                  ? "Formation?"
                  : language === "ar"
                  ? "التدريب؟"
                  : "Training?"}
              </span>
            </h2>
            <p className="text-lg opacity-90">
              {language === "fr"
                ? "Réservez une session ou enquête sur des programmes de formation personnalisés pour votre organisation ou groupe"
                : language === "ar"
                ? "احجز جلسة أو استفسر عن برامج تدريب مخصصة لمنظمتك أو مجموعتك"
                : "Book a session or inquire about customized training programs for your organization or group"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:shadow-lg transition-all"
              >
                {language === "fr" ? "Demander une Formation" : language === "ar" ? "طلب التدريب" : "Request Training"}
              </motion.button>
              <a
                href="https://www.linkedin.com/in/dhia-/"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 border border-background rounded-full font-semibold hover:bg-background/10 transition-all"
                rel="noopener noreferrer"
              >
                {language === "fr" ? "Connecter sur LinkedIn" : language === "ar" ? "الاتصال عبر LinkedIn" : "Connect on LinkedIn"}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
