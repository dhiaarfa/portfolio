"use client"

import { useRef, useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
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

function DhiaLogo3D() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        {/* Logo principal - forme MD pour Mohamed Dhia */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2, 3, 0.3]} />
          <meshStandardMaterial color="#1e40af" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Lettre M */}
        <mesh position={[-0.6, 0, 0.2]}>
          <boxGeometry args={[0.3, 2.5, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[-0.2, 0, 0.2]}>
          <boxGeometry args={[0.3, 2.5, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[-0.4, 0.6, 0.2]}>
          <boxGeometry args={[0.4, 0.3, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Lettre D */}
        <mesh position={[0.5, 0, 0.2]}>
          <boxGeometry args={[0.3, 2.5, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0.8, 0.8, 0.2]}>
          <boxGeometry args={[0.6, 0.3, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0.8, -0.8, 0.2]}>
          <boxGeometry args={[0.6, 0.3, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[1.1, 0, 0.2]}>
          <boxGeometry args={[0.3, 1.5, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Éléments décoratifs créatifs */}
        <mesh position={[3, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.3} />
        </mesh>

        <mesh position={[-3, -1, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
        </mesh>

        <mesh position={[2, -2, 1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>

        {/* Palette de couleurs flottante */}
        <mesh position={[-2, 2, 0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.4]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function LoadingFallback() {
  return (
      <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-32 h-20 bg-gradient-to-br from-[hsl(var(--zia-green))] to-emerald-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse">
          <span className="text-white font-bold text-2xl">MD</span>
        </div>
        <p className="text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 font-medium">Chargement du logo 3D...</p>
      </div>
    </div>
  )
}

function StaticLogo() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-32 h-20 bg-gradient-to-br from-[hsl(var(--zia-green))] to-emerald-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-2xl animate-float">
          <span className="text-white font-bold text-2xl">MD</span>
        </div>
        <h3 className="text-xl font-bold text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80">Mohamed Dhia</h3>
        <p className="text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/70 text-sm">Designer & Formateur</p>
      </div>
    </div>
  )
}

export default function Logo3D() {
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
    }, 1000)

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
    <div className="relative h-full w-full">
      {show3D && hasWebGL ? (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas shadows camera={{ position: [0, 0, zoom], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />

            <DhiaLogo3D />

            <Environment preset="city" />
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={8} blur={2.5} far={4} />
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              minDistance={3}
              maxDistance={12}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 6}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>

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
        </Suspense>
      ) : (
        <StaticLogo />
      )}
    </div>
  )
}
