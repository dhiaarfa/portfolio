'use client'

import { Brain, Users, Target, Repeat, MessageSquare, Lightbulb, Search, Rocket } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: '01',
    icon: Target,
    iconBg: 'bg-amber-50 dark:bg-amber-950',
    iconColor: 'text-amber-600 dark:text-amber-400',
    accentColor: 'text-amber-600 dark:text-amber-400',
    title: 'Needs Before Content',
    subtitle: 'Training Needs Assessment (TNA)',
    description:
      "Every session starts with a question, not a slide deck. Before designing anything, I map what participants already know, what they misunderstand, what they need to do differently after the training, and what barriers they'll face when applying it. This is why my sessions feel relevant — because they are built around real gaps, not assumed ones.",
    quote: '"A training that doesn\'t answer a real need is just an event."',
  },
  {
    number: '02',
    icon: Repeat,
    iconBg: 'bg-green-50 dark:bg-green-950',
    iconColor: 'text-green-600 dark:text-green-400',
    accentColor: 'text-green-600 dark:text-green-400',
    title: 'Learning Through Experience',
    subtitle: "Kolb's Experiential Learning Cycle",
    description:
      "I design sessions that follow the natural learning cycle: participants start with a lived experience or a physical activity, then reflect on it, then connect it to theory, then apply it in a new context. For example, instead of explaining learning styles by lecture, I have participants physically position themselves in the room based on how they prefer to learn — then we debrief and connect to theory. The insight lasts because it was felt first.",
    quote: '"People forget what they heard. They remember what they lived."',
  },
  {
    number: '03',
    icon: Brain,
    iconBg: 'bg-purple-50 dark:bg-purple-950',
    iconColor: 'text-purple-600 dark:text-purple-400',
    accentColor: 'text-purple-600 dark:text-purple-400',
    title: 'Designing for Every Learner',
    subtitle: "McCarthy's 4MAT Instructional Design Model",
    description:
      "Not everyone processes information the same way. Some participants need to understand why before engaging. Others want the theory immediately. Others learn by doing. Others by reflecting and imagining. I use the 4MAT framework — grounded in Kolb's theory and developed by Bernice McCarthy — to design sessions that move through all four quadrants: emotional connection → conceptual understanding → practical application → creative synthesis. No learner is left behind.",
    quote: '"The best session design is one where every participant finds their entry point."',
  },
  {
    number: '04',
    icon: Users,
    iconBg: 'bg-blue-50 dark:bg-blue-950',
    iconColor: 'text-blue-600 dark:text-blue-400',
    accentColor: 'text-blue-600 dark:text-blue-400',
    title: 'Human-Centered Facilitation',
    subtitle: 'Group Dynamics & Psychological Safety',
    description:
      "Content is only 30% of a training. The other 70% is the room: how people feel, who dominates, who stays silent, whether participants trust each other enough to be honest. I actively manage group dynamics — creating psychological safety from the first minute, using techniques to surface quiet voices, and redirecting dominant ones without embarrassment. My goal is to turn a group of strangers into a learning community.",
    quote: '"You can have the best content in the world. If the room isn\'t safe, nothing lands."',
  },
  {
    number: '05',
    icon: Lightbulb,
    iconBg: 'bg-rose-50 dark:bg-rose-950',
    iconColor: 'text-rose-600 dark:text-rose-400',
    accentColor: 'text-rose-600 dark:text-rose-400',
    title: 'Training People to Train',
    subtitle: 'Train-the-Trainer & Cascade Methodology',
    description:
      "Many of my sessions are designed with a multiplier effect in mind. I don't just train participants — I train future trainers. Through micro-training exercises, small-group session design, and structured peer feedback, participants leave not only with knowledge but with the ability and confidence to facilitate others. I have applied this approach in TNHRT (Training New Human Rights Trainers) workshops at international level.",
    quote: '"The most powerful outcome of a training is a room full of future trainers."',
  },
  {
    number: '06',
    icon: MessageSquare,
    iconBg: 'bg-teal-50 dark:bg-teal-950',
    iconColor: 'text-teal-600 dark:text-teal-400',
    accentColor: 'text-teal-600 dark:text-teal-400',
    title: 'Capable Actors, Not Informed Listeners',
    subtitle: 'Non-Formal Education & Action-Oriented Learning',
    description:
      "The final measure of any training is not what participants know when they leave the room — it is what they do in the week after. Every session I design ends with a clear answer to: 'What will you do differently tomorrow?' I work in the non-formal education tradition, where learning is participatory, values-based, and connected to real-world action. Participants leave as advocates, facilitators, and change-makers.",
    quote: '"Information without action is trivia. Training should change behavior."',
  },
]

const frameworks = [
  {
    name: "Kolb's Experiential\nLearning Theory",
    year: '1984',
    description: 'The foundational model behind how adults learn through concrete experience, reflection, and application.',
    color: 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30',
    textColor: 'text-green-700 dark:text-green-400',
  },
  {
    name: "McCarthy's 4MAT\nInstructional Design",
    year: '1979',
    description: 'An 8-step learning cycle that ensures every session engages all learner types — from emotional connection to creative application.',
    color: 'border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30',
    textColor: 'text-purple-700 dark:text-purple-400',
  },
  {
    name: "Dewey's Reflective\nPractice",
    year: '1933',
    description: 'Learning as an active process of problem-solving, testing, and revising — not passive reception of information.',
    color: 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30',
    textColor: 'text-amber-700 dark:text-amber-400',
  },
  {
    name: 'Non-Formal Education\n(NFE) Principles',
    year: 'Council of Europe',
    description: 'Participatory, values-based, learner-centered education outside formal systems — the tradition behind all youth and human rights training.',
    color: 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30',
    textColor: 'text-blue-700 dark:text-blue-400',
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function TrainingMethodologySection() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            Training Methodology
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why my trainings work.<br />
                <span className="text-amber-600 dark:text-amber-400">The philosophy behind the practice.</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed lg:text-right">
              Every session I design and facilitate is grounded in internationally recognized instructional design frameworks — adapted for real people, real needs, and real contexts.
            </p>
          </div>
        </div>

        {/* ── 6 Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.number}
                className="group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${pillar.iconBg}`}>
                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-xs font-bold tabular-nums ${pillar.accentColor}`}>
                        {pillar.number}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Pull quote */}
                <p className={`text-xs font-medium italic border-l-2 pl-3 ${pillar.accentColor} border-current opacity-75`}>
                  {pillar.quote}
                </p>
              </div>
            )
          })}
        </div>

        {/* ── KOLB CYCLE VISUAL ── */}
        <div className="my-16 bg-slate-900 rounded-3xl p-8 sm:p-12">
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-2 text-center">
            How I Design Every Session
          </p>
          <h3 className="text-xl font-bold text-white text-center mb-10">
            Kolb&apos;s Experiential Learning Cycle — in practice
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                phase: 'Concrete Experience',
                color: 'bg-green-600',
                borderColor: 'border-green-500',
                textColor: 'text-green-400',
                Icon: Target,
                description:
                  'Start with an activity, exercise, or real situation. Participants live the experience before any theory.',
                example: 'Physical positioning exercise for learning styles',
              },
              {
                step: '02',
                phase: 'Reflective Observation',
                color: 'bg-blue-600',
                borderColor: 'border-blue-500',
                textColor: 'text-blue-400',
                Icon: Search,
                description:
                  'Group debrief: What happened? What did you notice? What surprised you?',
                example: '"What did you observe about your choices?"',
              },
              {
                step: '03',
                phase: 'Abstract Conceptualisation',
                color: 'bg-purple-600',
                borderColor: 'border-purple-500',
                textColor: 'text-purple-400',
                Icon: Lightbulb,
                description:
                  'Now the theory is introduced — and it makes sense because participants already lived it.',
                example: "VARK model, Kolb's theory, 4MAT framework",
              },
              {
                step: '04',
                phase: 'Active Experimentation',
                color: 'bg-amber-600',
                borderColor: 'border-amber-500',
                textColor: 'text-amber-400',
                Icon: Rocket,
                description:
                  'Apply the concept in a new context. Design a session, facilitate a mini-training, test a skill.',
                example: 'Participants design and deliver their own 10-min session',
              },
            ].map((phase, i) => (
              <div
                key={phase.step}
                className={`relative rounded-2xl border ${phase.borderColor} bg-slate-800/60 p-5`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-3xl font-black ${phase.textColor} opacity-30`}>{phase.step}</span>
                  <phase.Icon className={`w-6 h-6 ${phase.textColor}`} />
                </div>

                <div className={`inline-block px-2.5 py-1 rounded-lg ${phase.color} mb-3`}>
                  <p className="text-xs font-bold text-white">{phase.phase}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">{phase.description}</p>

                <div className="border-t border-slate-700 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Real example</p>
                  <p className="text-xs text-slate-400 italic">{phase.example}</p>
                </div>

                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-slate-300 text-xs">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="text-xs text-slate-500 italic">
              ↺ This cycle repeats — each application becomes the next concrete experience
            </span>
          </div>
        </div>

        {/* ── Theoretical Frameworks ── */}
        <div>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Theoretical Foundations
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Built on frameworks that work.
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto">
              These aren't buzzwords. They're the peer-reviewed, internationally recognized models that underpin every session I design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {frameworks.map((fw) => (
              <div
                key={fw.name}
                className={`rounded-2xl border p-5 ${fw.color}`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${fw.textColor}`}>
                  {fw.year}
                </p>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2 whitespace-pre-line">
                  {fw.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

