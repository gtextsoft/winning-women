"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimatedPathProps {
  path: string
  className?: string
  pathClassName?: string
  width?: number
  height?: number
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  viewBox?: string
  preserveAspectRatio?: string
}

export default function ScrollAnimatedPath({
  path,
  className = "",
  pathClassName = "",
  width = 100,
  height = 100,
  strokeWidth = 2,
  strokeColor = "hsl(var(--luxury-red))",
  fillColor = "none",
  viewBox = "0 0 100 100",
  preserveAspectRatio = "none",
}: ScrollAnimatedPathProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  const pathOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        className="w-full h-full"
      >
        <motion.path
          d={path}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={fillColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength, opacity: pathOpacity }}
          className={pathClassName}
        />
      </svg>
    </div>
  )
}
