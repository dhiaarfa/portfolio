"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">About</p>
              <h2 className="text-3xl md:text-5xl font-bold">Building Leaders Through Training & Design</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Mohamed Dhia Arfa, a passionate trainer, designer, and developer with 7 years of professional
                experience. I combine expertise in graphic design, UI/UX, and full-stack web development to deliver
                comprehensive training and solutions.
              </p>
              <p>
                My journey spans creative design leadership (450+ training hours in design), technical development (420+
                training hours in web development), and strategic business development. I've trained 950+ learners and
                worked with leading organizations across education, tech, and NGO sectors.
              </p>
              <p>
                Supported by organizations like Youth Clubs Association, IFMSA, UNESCO, and Deakin University, I bring
                measurable impact through well-designed training experiences, compelling visual identities, and robust
                technical solutions.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { number: "934", label: "Trainees", suffix: "" },
                { number: "381", label: "Training Hours", suffix: "+" },
                { number: "61", label: "Events", suffix: "" },
                { number: "21", label: "Facilitations", suffix: "+" },
                { number: "7", label: "Years Experience", suffix: "" },
                { number: "50+", label: "Projects Delivered", suffix: "" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 border border-border rounded-2xl hover:border-foreground/50 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold">
                    {stat.number}
                    <span className="text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
