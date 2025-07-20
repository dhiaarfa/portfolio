import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-20">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">À Propos d'EcoDesign</h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Notre mission est de créer des produits élégants et durables pour un avenir meilleur.
            </p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <video className="h-full w-full object-cover" controls poster="/placeholder.svg?height=720&width=1280">
              <source src="/videos/about-us.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notre Histoire</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fondée en 2020, EcoDesign est née de la passion de trois designers engagés pour l'environnement. Face à
              l'urgence climatique et à la surconsommation, nous avons décidé de créer une entreprise qui propose des
              alternatives durables et esthétiques aux produits conventionnels.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Notre équipe s'est agrandie au fil des années, mais notre mission reste la même : concevoir des produits
              qui allient beauté, fonctionnalité et respect de l'environnement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notre Approche</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Chaque produit EcoDesign est conçu selon des principes stricts :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Utilisation de matériaux recyclés, recyclables ou biodégradables</li>
              <li>Conception pour la durabilité et la réparabilité</li>
              <li>Production locale pour réduire l'empreinte carbone</li>
              <li>Conditions de travail équitables pour tous les artisans</li>
              <li>Emballages minimalistes et écologiques</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notre Équipe</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Sophie Martin"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Sophie Martin</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fondatrice & Designer</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Thomas Dubois"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Thomas Dubois</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Co-fondateur & Ingénieur</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Léa Petit"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Léa Petit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Co-fondatrice & Responsable Développement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
