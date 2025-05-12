"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const [dots, setDots] = useState("")
  const [forceUnmount, setForceUnmount] = useState(false)

  useEffect(() => {
    // Animation for loading dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    // Force unmount after 5 seconds to prevent infinite loading
    const timer = setTimeout(() => {
      setForceUnmount(true)
    }, 5000)

    return () => {
      clearInterval(dotsInterval)
      clearTimeout(timer)
    }
  }, [])

  if (forceUnmount) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-r from-black to-luxury-red flex flex-col items-center justify-center"
    >
      <div className="w-24 h-24 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-playfair text-6xl font-bold text-white">W</span>
        </div>
        <motion.div
          className="absolute inset-0 border-4 border-white rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <div className="mt-8 text-white text-xl font-medium">Loading{dots}</div>
    </motion.div>
  )
}
