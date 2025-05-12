"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  startColor?: string
  endColor?: string
  startOpacity?: number
  endOpacity?: number
}

export default function ScrollAnimatedBackground({
  children,
  className = "",
  startColor = "hsl(var(--luxury-red))",
  endColor = "hsl(var(--luxury-gold))",
  startOpacity = 0.1,
  endOpacity = 0.9,
}: ScrollAnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to background properties
  const backgroundColor = useTransform(scrollYProgress, [0, 1], [startColor, endColor])

  const opacity = useTransform(scrollYProgress, [0, 1], [startOpacity, endOpacity])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div className="absolute inset-0" style={{ backgroundColor, opacity }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
