"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Truck, ShieldCheck, Heart, Award } from "lucide-react"

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-teal-500" />,
    title: "Matériaux Durables",
    description:
      "Tous nos produits sont fabriqués à partir de matériaux durables ou recyclés pour minimiser l'impact environnemental.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-teal-500" />,
    title: "Économie Circulaire",
    description:
      "Nous concevons nos produits pour qu'ils puissent être facilement réparés, réutilisés ou recyclés en fin de vie.",
  },
  {
    icon: <Truck className="h-10 w-10 text-teal-500" />,
    title: "Livraison Écologique",
    description:
      "Nos livraisons sont optimisées pour réduire les émissions de carbone et utilisent des emballages biodégradables.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
    title: "Garantie Longue Durée",
    description:
      "Tous nos produits sont garantis 5 ans, car nous croyons en la qualité et la durabilité de nos créations.",
  },
  {
    icon: <Heart className="h-10 w-10 text-teal-500" />,
    title: "Fabrication Éthique",
    description:
      "Nous travaillons avec des artisans locaux dans des conditions de travail équitables et respectueuses.",
  },
  {
    icon: <Award className="h-10 w-10 text-teal-500" />,
    title: "Certifications",
    description:
      "Nos produits sont certifiés par des organismes indépendants qui garantissent notre engagement écologique.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
              Nos Engagements
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pourquoi Choisir EcoDesign?</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez ce qui rend nos produits uniques et comment nous contribuons à un avenir plus durable.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900/30">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
