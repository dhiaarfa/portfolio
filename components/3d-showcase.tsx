"use client"

import { useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamic imports to avoid SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })), {
  ssr: false,
  loading: () => <LoadingFallback />,
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })), {
  ssr: false,
})

const Environment = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Environment })), {
  ssr: false,
})

const ContactShadows = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.ContactShadows })), {
  ssr: false,
})

const Float = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Float })), {
  ssr: false,
})

function Character3D({ position = [0, -1, 0], scale = 1, rotation = [0, Math.PI / 4, 0] }) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>

        {/* Head */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
        <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.15, -0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.15, -0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </Float>
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[hsl(var(--zia-green))] mx-auto mb-4"></div>
        <p className="text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 font-medium">Chargement du modèle 3D...</p>
      </div>
    </div>
  )
}

function StaticShowcase() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg">
      <div className="text-center p-8">
        <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--zia-green))] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-white font-bold text-2xl">3D</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Modélisation 3D</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Nos créations 3D interactives pour vos projets innovants
        </p>
      </div>
    </div>
  )
}

export default function ThreeDShowcase() {
  const [activeModel, setActiveModel] = useState(0)
  const [zoom, setZoom] = useState(5)
  const [show3D, setShow3D] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(false)

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    setHasWebGL(!!gl)

    // Delay 3D loading
    const timer = setTimeout(() => {
      setShow3D(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const models = [
    {
      name: "Personnage Innovateur",
      description: "Modèle 3D représentant l'innovation et la créativité de notre équipe DevTeam.",
      thumbnailUrl: "/placeholder.svg?height=300&width=400&text=Modèle+3D",
    },
    {
      name: "Design Interactif",
      description: "Création 3D interactive démontrant nos compétences en modélisation avancée.",
      thumbnailUrl: "/placeholder.svg?height=300&width=400&text=Design+3D",
    },
    {
      name: "Prototype Digital",
      description: "Prototype 3D pour visualiser des concepts avant développement.",
      thumbnailUrl: "/placeholder.svg?height=300&width=400&text=Prototype",
    },
  ]

  const handleZoomIn = () => setZoom((prev) => Math.max(prev - 1, 2))
  const handleZoomOut = () => setZoom((prev) => Math.min(prev + 1, 10))
  const handleReset = () => setZoom(5)

  const nextModel = () => setActiveModel((activeModel + 1) % models.length)
  const prevModel = () => setActiveModel((activeModel - 1 + models.length) % models.length)

  return (
    <section
      id="3d-showcase"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80">
              Innovations 3D
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Créations 3D Interactives</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos compétences en modélisation 3D et visualisation interactive pour vos projets innovants.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {show3D && hasWebGL ? (
              <Suspense fallback={<LoadingFallback />}>
                <Canvas camera={{ position: [0, 0, zoom], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                  <Character3D position={[0, -1, 0]} scale={2} rotation={[0, Math.PI / 4, 0]} />

                  <Environment preset="city" />
                  <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
                  <OrbitControls
                    enablePan={false}
                    minDistance={2}
                    maxDistance={10}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                  />
                </Canvas>
              </Suspense>
            ) : (
              <StaticShowcase />
            )}

            {show3D && hasWebGL && (
              <>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button variant="secondary" size="icon" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" onClick={handleZoomIn}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" onClick={handleZoomOut}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={prevModel}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={nextModel}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="0" onValueChange={(value) => setActiveModel(Number.parseInt(value))}>
              <TabsList className="grid w-full grid-cols-3">
                {models.map((model, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    Modèle {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {models.map((model, index) => (
                <TabsContent key={index} value={index.toString()} className="space-y-4">
                  <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(var(--zia-green))]/10 to-purple-100 dark:from-[hsl(var(--zia-green))]/20 dark:to-purple-900/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--zia-green))] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">3D</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">Aperçu du modèle</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{model.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{model.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Caractéristiques:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-[hsl(var(--zia-green))]"></div>
                        <span>Modélisation haute qualité</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-[hsl(var(--zia-green))]"></div>
                        <span>Interactions fluides</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-[hsl(var(--zia-green))]"></div>
                        <span>Optimisé pour le web</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-[hsl(var(--zia-green))]"></div>
                        <span>Compatible tous navigateurs</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-600 hover:from-[hsl(var(--zia-green))]/90 hover:to-purple-700">
                    Découvrir nos services 3D
                  </Button>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
