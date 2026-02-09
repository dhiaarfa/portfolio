"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"

function Model() {
  const [showInfo, setShowInfo] = useState(false)
  // For demo purposes, we'll use the duck model
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return (
    <>
      <primitive
        object={scene}
        scale={2.5}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        onClick={() => setShowInfo(!showInfo)}
      />

      {showInfo && (
        <Html position={[2, 0, 0]} className="pointer-events-none">
          <Card className="w-64 pointer-events-auto">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Chaise Écologique</h3>
              <p className="text-sm text-gray-500 mb-4">
                Fabriquée à partir de matériaux recyclés, cette chaise allie confort et respect de l'environnement.
              </p>
              <div className="text-teal-600 font-bold">€199</div>
            </CardContent>
          </Card>
        </Html>
      )}
    </>
  )
}

export default function ThreeDViewer() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-4 left-4 z-10">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Button variant="outline" className="gap-2">
          <Info className="h-4 w-4" />
          Cliquez sur le modèle pour plus d'infos
        </Button>
      </div>

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Model />
        <Environment preset="apartment" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
        <OrbitControls enablePan={false} minDistance={3} maxDistance={20} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
