'use client'

import { useEffect, useRef, useState } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default function VantaNetBackground() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2020a2,
          backgroundColor: 0x170534,
          points: 12.0,
          maxDistance: 19.0,
          spacing: 17.0
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen relative flex items-center justify-center text-white text-2xl"
    >
      <div className="z-10">Welcome to My Animated Background!</div>
    </div>
  )
}
