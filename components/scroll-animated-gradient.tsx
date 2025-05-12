"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimatedGradientProps {
  children: React.ReactNode
  className?: string
  startColor?: string
  endColor?: string
  direction?: "to-right" | "to-left" | "to-bottom" | "to-top" | "to-br" | "to-tr" | "to-bl" | "to-tl"
}

export default function ScrollAnimatedGradient({
  children,
  className = "",
  startColor = "from-luxury-red",
  endColor = "to-luxury-gold",
  direction = "to-right",
}: ScrollAnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to gradient position
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Convert direction to CSS class
  const getDirectionClass = () => {
    switch (direction) {
      case "to-right":
        return "bg-gradient-to-r"
      case "to-left":
        return "bg-gradient-to-l"
      case "to-bottom":
        return "bg-gradient-to-b"
      case "to-top":
        return "bg-gradient-to-t"
      case "to-br":
        return "bg-gradient-to-br"
      case "to-tr":
        return "bg-gradient-to-tr"
      case "to-bl":
        return "bg-gradient-to-bl"
      case "to-tl":
        return "bg-gradient-to-tl"
      default:
        return "bg-gradient-to-r"
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        backgroundPosition: gradientPosition,
        backgroundSize: "200% 200%",
      }}
    >
      <div className={`absolute inset-0 ${getDirectionClass()} ${startColor} ${endColor} opacity-80`} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
