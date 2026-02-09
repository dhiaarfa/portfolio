"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Mohamed Dhia Arfa",
      role: "Fondateur & Directeur Créatif",
      specialization: "Design Graphique, Formation, Marketing",
      email: "mohameddhiaarfa@gmail.com",
      phone: "+216 53 580 272",
      location: "Tunisie",
      experience: "7+ ans en design",
      image: "/img/team/ahmed-younes.jpg",
      description:
        "Fondateur de DevTeam, expert en design graphique avec plus de 7 ans d'expérience et plus de 900 participants formés. Il dirige la vision créative de l'agence et supervise tous les projets de formation.",
      skills: ["Design Graphique", "UI/UX Design", "Formation", "Marketing Digital", "Business Development"],
      color: "from-[hsl(var(--zia-green))] to-indigo-600",
    },
    {
      name: "Adam Hamadi",
      role: "Développeur Web & Spécialiste Multimédia",
      specialization: "Développement Web, Montage Vidéo",
      email: "ademhamadi550@gmail.com",
      phone: "58840491",
      location: "Sousse",
      experience: "Développeur Full-Stack",
      image: "/img/team/adam-hamadi.jpg",
      description:
        "Spécialiste en développement web et multimédia, Adam apporte son expertise technique pour créer des sites web modernes et des contenus visuels captivants.",
      skills: ["JavaScript", "CSS", "HTML", "Montage Vidéo", "Conception Web"],
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Ahmed Younes",
      role: "Développeur Full-Stack Senior",
      specialization: "Développement Web, Applications Mobiles",
      email: "ahmedyounes254@gmail.com",
      phone: "93184552",
      location: "Monastir",
      experience: "Expert React & Mobile",
      image: "/img/profile.jpg",
      description:
        "Expert en développement full-stack avec une spécialisation en React et développement mobile. Ahmed gère les projets techniques complexes et les applications métier.",
      skills: ["React JS", "C#", "Java", "PHP", "Unity", "Python", "Angular"],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Aziz Ben Amor",
      role: "Développeur Systèmes & IoT",
      specialization: "Développement Web, Systèmes Embarqués",
      email: "azizbenamor@gmail.com",
      phone: "53471447",
      location: "Monastir",
      experience: "Spécialiste IoT & Python",
      image: "/img/team/aziz-ben-amor.jpg",
      description:
        "Expert en systèmes embarqués et IoT, Aziz développe des solutions innovantes connectées et gère l'infrastructure technique de nos projets.",
      skills: ["Python", "Arduino", "MATLAB", "Unity", "Pygame", "Angular", "Oracle"],
      color: "from-orange-500 to-red-600",
    },
  ]

  const handleContactMember = (email: string) => {
    window.location.href = `mailto:${email}?subject=Demande de contact - DevTeam`
  }

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80">
              Notre Équipe
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Les Experts Derrière DevTeam
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Une équipe de 4 professionnels passionnés, chacun expert dans son domaine, unis pour créer des solutions
              digitales exceptionnelles.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div style={{width: "128px", height: "128px", borderRadius: "50%", overflow: "hidden", margin: "0 auto", marginLeft: 0, border: "4px solid white", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", backgroundColor: "#f3f4f6"}}>
                          <img src={member.image || "/placeholder.svg"} alt={member.name} style={{width: "100%", height: "100%", display: "block", objectFit: "cover"}} />
                        </div>
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p
                          className={`text-lg font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                        >
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{member.specialization}</p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Expertises clés:</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.slice(0, 4).map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                            {member.skills.length > 4 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                                +{member.skills.length - 4} autres
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3 text-gray-400" />
                            <span className="truncate">{member.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3 text-gray-400" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span>{member.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                            <span>{member.experience}</span>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          className={`w-full bg-gradient-to-r ${member.color} hover:opacity-90`}
                          onClick={() => handleContactMember(member.email)}
                        >
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
