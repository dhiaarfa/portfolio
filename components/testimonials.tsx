"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, ExternalLink, Star } from "lucide-react"
import { getTranslation, type Language } from "@/lib/translations"

interface TestimonialsProps {
  language: Language
}

export default function Testimonials({ language }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const t = (key: keyof typeof import("@/lib/translations").translations.en) => getTranslation(language, key)

  const testimonials = [
    {
      text:
        language === "fr"
          ? "Je suis ravi de recommander Dhia, l'un des tuteurs les plus talentueux et dévoués de notre plateforme, Z Training. Son cours de design a été un véritable game-changer pour beaucoup de nos étudiants, leur fournissant à la fois des connaissances théoriques et des compétences pratiques pour exceller dans le domaine du design."
          : "I am thrilled to recommend Dhia, one of the most talented and dedicated tutors on our platform, Z Training. His design course has been a game-changer for many of our students, providing them with both theoretical knowledge and practical skills to excel in the field of design.",
      author: "ZOUARI Mehdi",
      position:
        language === "fr"
          ? "Fondateur & PDG chez Z Training et Zouari School"
          : "Founder & CEO at Z Training and Zouari School",
      company: "Z Training",
      linkedin: "https://linkedin.com/in/zouari-mehdi",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "Travailler avec Dhia a été un voyage inspirant ! Son leadership lors de la 2ème cohorte de l'École des 1000 Défis était remarquable, menant au succès avec passion et travail d'équipe. Dans AIESEC, Dhia s'est distingué par son adaptabilité, son dévouement et sa capacité à rassembler les gens. Son focus sur l'autonomisation des autres et l'obtention de résultats impactants est vraiment admirable. Dhia est un vrai leader et un plaisir de collaborer avec lui, il excellera sûrement dans tout défi qu'il entreprend !"
          : "Working with Dhia has been an inspiring journey! His leadership during the 2nd cohort of the 1000 Challenges School was remarkable, driving success with passion and teamwork. In AIESEC, Dhia stood out for his adaptability, dedication, and ability to bring people together. His focus on empowering others and achieving impactful results is truly admirable. Dhia is a true leader and a joy to collaborate with, he's sure to excel in any challenge he takes on!",
      author: "RAYEN BEJAOUI",
      position: language === "fr" ? "Chef de Projet Junior" : "Junior Project Manager",
      company: "1000 Challenges School",
      linkedin: "https://linkedin.com/in/rayen-bejaoui",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "Lors de notre participation en tant que partie des 5% sélectionnés pour représenter la Tunisie au Hackathon Migration de l'OIM - ONU à Doha, j'ai eu le privilège de travailler étroitement avec Mohammed Dhia. J'ai découvert qu'il était un individu inspirant avec des compétences collaboratives exceptionnelles, contribuant constamment avec des idées innovantes et une perspective de design unique. Sa créativité, son travail d'équipe et son dévouement étaient vraiment remarquables. Je le recommande vivement pour tout projet collaboratif, car ses contributions mèneront sûrement au succès."
          : "During our participation as part of the top 5% selected to represent Tunisia at the IOM - UN Migration Hackathon in Doha, I had the privilege of working closely with Mohammed Dhia. I discovered him to be an inspiring individual with outstanding collaborative skills, consistently contributing innovative ideas and a unique design perspective. His creativity, teamwork, and dedication were truly remarkable. I highly recommend him for any collaborative project, as his contributions are sure to lead to success.",
      author: "Omayma Arfaoui",
      position:
        language === "fr"
          ? "Ingénieure Géosciences | Ingénieure Pétrolière"
          : "Geosciences Engineer | Petroleum Engineer",
      company:
        language === "fr"
          ? "Fellow Harvard ALP | Fellow Green Leader Academy"
          : "Harvard ALP Fellow | Green Leader Academy Fellow",
      linkedin: "https://linkedin.com/in/omayma-arfaoui",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "J'ai travaillé étroitement avec Mohamed Dhia Arfa quand j'étais membre d'AIESEC Sousse et j'ai remarqué qu'il est un designer hautement qualifié et innovant, un marketeur digital motivé et un travailleur jeunesse inspirant. Je le recommande vivement pour toute ouverture de stage ou possibilités d'emploi."
          : "I worked closely with Mohamed Dhia Arfa when I was a member in AIESEC Sousse and I noticed that he is a highly-qualified and innovative designer, motivated digital marketer and an inspiring youth worker. I highly recommend him for any internship openings or job possibilities.",
      author: "Ikram Allah Nemri",
      position:
        language === "fr" ? "MSc en Économie Internationale & Business" : "MSc in International Economy & Business",
      company:
        language === "fr"
          ? "Travailleuse Jeunesse | Bénévole & Entrepreneure Sociale"
          : "Youth Worker | Volunteer & Social Entrepreneur",
      linkedin: "https://linkedin.com/in/ikram-nemri",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "Pendant son stage chez Jasmin Marketing, Mohamed Dhia Arfa a constamment démontré créativité et dévouement en tant que designer graphique. Son attention aux détails et son empressement à apprendre étaient évidents dans chaque projet. Je recommande vivement Mohamed Dhia pour son engagement et son professionnalisme."
          : "During his internship at Jasmin Marketing, Mohamed Dhia Arfa consistently demonstrated creativity and dedication as a graphic designer. His attention to detail and eagerness to learn were evident in every project. I highly recommend Mohamed Dhia for his commitment and professionalism.",
      author: "Youssef Touati",
      position: language === "fr" ? "PDG & Co-Fondateur chez Jasmin Marketing" : "CEO & Co-Founder at Jasmin Marketing",
      company: language === "fr" ? "Expert en Développement Web" : "Web Development Expert",
      linkedin: "https://linkedin.com/in/youssef-touati",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "Je recommande vivement de travailler avec Dhia car il est le symbole du dynamisme et de la précision dans son environnement de travail. Dans mon expérience, il a apporté tellement de valeur ajoutée en termes de design graphique, planification stratégique, logistique et représentation externe. Je suis convaincu que Dhia a un excellent ensemble de compétences et une attention aux détails qui favorise l'évolution de vos projets."
          : "I would highly recommend working with Dhia since he is the symbol of dynamism and accuracy in his work environment. In my experience, he brought so much added value in terms of graphic design, strategic planning, logistics and external representation. I'm convinced that Dhia has a great skillset and attention to detail that promotes the evolution of your projects.",
      author: "CHEBBI Skander",
      position: language === "fr" ? "Designer Graphique" : "Graphic Designer",
      company: language === "fr" ? "Professionnel Créatif" : "Creative Professional",
      linkedin: "https://linkedin.com/in/skander-chebbi",
      rating: 5,
    },
    {
      text:
        language === "fr"
          ? "J'ai eu le plaisir de travailler étroitement avec Dhia pendant MeetUp Pro 1.0, où il a servi comme OCVP Marketing et moi comme Gestionnaire d'Événement. Dhia a démontré des compétences exceptionnelles en marketing stratégique, créativité et attention aux détails. Il a joué un rôle crucial dans la promotion et l'assurance du succès de l'événement grâce à sa capacité exceptionnelle à développer du contenu engageant et gérer efficacement les campagnes marketing. Le dévouement, le professionnalisme et la nature collaborative de Dhia étaient vraiment louables. C'était un plaisir de travailler avec lui, et je recommande vivement Dhia pour tout rôle lié au marketing ou aux événements. Il apportera sans aucun doute une grande valeur à toute équipe ou projet."
          : "I had the pleasure of working closely with Dhia during MeetUp Pro 1.0, where he served as the OCVP Marketing and I as the Event Manager. Dhia demonstrated exceptional skills in strategic marketing, creativity, and attention to detail. He played a crucial role in promoting and ensuring the success of the event through his outstanding ability to develop engaging content and effectively manage marketing campaigns. Dhia's dedication, professionalism, and collaborative nature were truly commendable. It was a pleasure working with him, and I highly recommend Dhia for any marketing or event-related role. He will undoubtedly bring great value to any team or project.",
      author: "Amir Boujelben",
      position: language === "fr" ? "Étudiant en Génie Logiciel" : "Software Engineering Student",
      company: "Intern @AdDefend GmbH",
      linkedin: "https://linkedin.com/in/amir-boujelben",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openLinkedIn = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("clientFeedback")}
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t("testimonials")}
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("testimonialsDesc")}
            </motion.p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full glass hover:shadow-2xl transition-all duration-500 border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <motion.div
                          className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-4 dark:from-blue-900/30 dark:to-purple-900/30"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      <motion.p
                        className="mb-6 text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        "{testimonial.text}"
                      </motion.p>

                      <div className="flex flex-col items-center">
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h4 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.position}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:scale-105"
                            onClick={() => openLinkedIn(testimonial.linkedin)}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            LinkedIn
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full glass hover:shadow-lg transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full glass hover:shadow-lg transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
