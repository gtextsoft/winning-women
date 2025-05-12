"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionDividerProps {
  className?: string
  color?: string
}

export default function SectionDivider({ className = "", color = "luxury-red" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ opacity }} className={`relative h-24 w-full overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 10 Q 25 20 50 10 Q 75 0 100 10"
          stroke={`hsl(var(--${color}))`}
          strokeWidth="0.5"
          style={{ pathLength }}
        />
        <motion.path
          d="M0 10 Q 25 0 50 10 Q 75 20 100 10"
          stroke={`hsl(var(--${color}))`}
          strokeWidth="0.5"
          style={{ pathLength }}
        />
      </svg>
    </motion.div>
  )
}
