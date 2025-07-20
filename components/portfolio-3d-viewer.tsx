"use client"

import { useRef, useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
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

function Model() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <group onClick={() => setShowInfo(!showInfo)}>
          {/* Main object */}
          <mesh position={[0, 0, 0]}>
            <dodecahedronGeometry args={[1]} />
            <meshStandardMaterial color="#6366f1" roughness={0.3} metalness={0.7} />
          </mesh>

          {/* Orbiting elements */}
          <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial color="#f59e0b" />
          </mesh>

          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="#ef4444" />
          </mesh>

          <mesh position={[0, 2, 0]}>
            <octahedronGeometry args={[0.25]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
        </group>
      </Float>

      {showInfo && (
        <div className="absolute top-4 left-4 z-10 pointer-events-auto">
          <Card className="w-64">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Projet 3D DevTeam</h3>
              <p className="text-sm text-gray-500 mb-4">
                Modèle 3D interactif démontrant nos compétences en visualisation et modélisation.
              </p>
              <div className="text-blue-600 font-bold">Cliquez pour explorer</div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-blue-600 dark:text-blue-400 font-medium">Chargement...</p>
      </div>
    </div>
  )
}

function StaticViewer() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg">
      <div className="text-center p-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-white font-bold text-xl">3D</span>
        </div>
        <h3 className="text-lg font-bold mb-2">Portfolio 3D</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Nos créations 3D pour vos projets innovants</p>
      </div>
    </div>
  )
}

export default function Portfolio3DViewer() {
  const [zoom, setZoom] = useState(5)
  const [show3D, setShow3D] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(false)
  const controlsRef = useRef(null)

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    setHasWebGL(!!gl)

    // Delay 3D loading
    const timer = setTimeout(() => {
      setShow3D(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleZoomIn = () => setZoom((prev) => Math.max(prev - 1, 2))
  const handleZoomOut = () => setZoom((prev) => Math.min(prev + 1, 10))
  const handleReset = () => {
    setZoom(5)
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
      <div className="absolute top-4 right-4 z-10">
        <Button variant="outline" className="gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <Info className="h-4 w-4" />
          {show3D && hasWebGL ? "Cliquez sur le modèle" : "Visualisation 3D"}
        </Button>
      </div>

      {show3D && hasWebGL ? (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas shadows camera={{ position: [0, 0, zoom], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Model />
            <Environment preset="apartment" />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              minDistance={2}
              maxDistance={10}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 6}
            />
          </Canvas>
        </Suspense>
      ) : (
        <StaticViewer />
      )}

      {show3D && hasWebGL && (
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
      )}
    </div>
  )
}
