"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollStaggeredItemsProps {
  children: React.ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
  duration?: number
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
  once?: boolean
}

export default function ScrollStaggeredItems({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 0.1,
  duration = 0.5,
  threshold = 0.1,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollStaggeredItemsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once, amount: threshold })

  // Get transform values based on direction
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }),
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }),
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }),
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }),
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          }),
        }
    }
  }

  const variants = getVariants()

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
