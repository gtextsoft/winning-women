"use client"

import { type ReactNode, useContext, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { PageTransitionContext } from "@/context/page-transition-context"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { exitAnimation } = useContext(PageTransitionContext)
  const nodeRef = useRef(null)

  const variants = {
    initial: {
      opacity: 0,
      y: exitAnimation === "up" ? 50 : exitAnimation === "down" ? -50 : 0,
      x: exitAnimation === "left" ? 50 : exitAnimation === "right" ? -50 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    exit: {
      opacity: 0,
      y: exitAnimation === "up" ? -50 : exitAnimation === "down" ? 50 : 0,
      x: exitAnimation === "left" ? -50 : exitAnimation === "right" ? 50 : 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        ref={nodeRef}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
