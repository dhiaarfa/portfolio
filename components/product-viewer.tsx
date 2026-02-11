"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

const DUCK_MODEL = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/Duck/glTF-Binary/Duck.glb"

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(DUCK_MODEL)

  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
}

export default function ProductViewer({ modelPath }: { modelPath: string }) {
  const controlsRef = useRef<any>(null)
  const [zoom, setZoom] = useState(1)

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
    setZoom(1)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5))
  }

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.addEventListener("change", () => {
        // This will trigger when the user interacts with the model
      })
    }
  }, [])

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Model modelPath={modelPath} />
        <Environment preset="apartment" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
        <OrbitControls ref={controlsRef} enablePan={false} minDistance={2} maxDistance={10} zoom={zoom} />
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
    </>
  )
}
