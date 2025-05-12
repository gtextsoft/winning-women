"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  rotationFactor?: number
  scaleFactor?: number
}

export default function ScrollParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.2,
  direction = "up",
  rotationFactor = 0,
  scaleFactor = 0,
}: ScrollParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Get scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Set up transformations based on scroll position
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" || direction === "down" ? [direction === "down" ? -100 * speed : 100 * speed, 0] : [0, 0],
  )

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" || direction === "right" ? [direction === "right" ? -100 * speed : 100 * speed, 0] : [0, 0],
  )

  const rotate = useTransform(scrollYProgress, [0, 1], rotationFactor !== 0 ? [rotationFactor, 0] : [0, 0])

  const scale = useTransform(scrollYProgress, [0, 1], scaleFactor !== 0 ? [1 - scaleFactor, 1] : [1, 1])

  // Update dimensions on resize
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, x, rotate, scale }} className="w-full h-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes={`(max-width: 768px) 100vw, ${dimensions.width}px`}
        />
      </motion.div>
    </div>
  )
}
