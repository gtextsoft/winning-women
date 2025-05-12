"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

interface ScrollRevealTextProps {
  children: string
  className?: string
  threshold?: number
  staggerChildren?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export default function ScrollRevealText({
  children,
  className = "",
  threshold = 0.1,
  staggerChildren = 0.03,
  direction = "up",
  distance = 20,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `start+=${threshold * 100}% end`],
  })

  // Split text into words
  const words = children.split(" ")

  // Get transform values based on direction
  const getTransformValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: distance, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "down":
        return { initial: { y: -distance, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "left":
        return { initial: { x: distance, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      case "right":
        return { initial: { x: -distance, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      default:
        return { initial: { y: distance, opacity: 0 }, animate: { y: 0, opacity: 1 } }
    }
  }

  const { initial, animate } = getTransformValues()

  return (
    <motion.div ref={containerRef} className={`overflow-hidden ${className}`} style={{ opacity: scrollYProgress }}>
      <div className="flex flex-wrap">
        {words.map((word, i) => (
          <motion.div
            key={`${word}-${i}`}
            initial={initial}
            animate={scrollYProgress.get() > 0 ? animate : initial}
            transition={{
              duration: 0.5,
              delay: i * staggerChildren,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="mr-[0.25em] mb-[0.25em] inline-block"
          >
            {word}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
