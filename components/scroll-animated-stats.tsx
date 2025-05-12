"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ScrollAnimatedCounter from "@/components/scroll-animated-counter"

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}

interface ScrollAnimatedStatsProps {
  stats: Stat[]
  className?: string
  itemClassName?: string
  counterClassName?: string
  labelClassName?: string
  staggerDelay?: number
}

export default function ScrollAnimatedStats({
  stats,
  className = "",
  itemClassName = "",
  counterClassName = "",
  labelClassName = "",
  staggerDelay = 0.1,
}: ScrollAnimatedStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <div ref={containerRef} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * staggerDelay }}
            className={`text-center ${itemClassName}`}
          >
            <ScrollAnimatedCounter
              end={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              delay={index * 200}
              className={`text-4xl md:text-5xl font-bold text-luxury-red ${counterClassName}`}
            />
            <div className={`mt-2 text-gray-600 ${labelClassName}`}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
