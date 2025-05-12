"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface ScrollAnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export default function ScrollAnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: ScrollAnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    let startTimestamp: number | null = null
    let animationFrameId: number

    if (inView) {
      // Delay the start of the animation if needed
      const timeoutId = setTimeout(() => {
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp
          const progress = Math.min((timestamp - startTimestamp) / duration, 1)

          // Use easeOutExpo for a more natural counting effect
          const easeOutExpo = 1 - Math.pow(2, -10 * progress)

          countRef.current = progress === 1 ? end : easeOutExpo * end
          setCount(countRef.current)

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step)
          }
        }

        animationFrameId = requestAnimationFrame(step)
      }, delay)

      return () => {
        clearTimeout(timeoutId)
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [inView, end, duration, delay])

  // Format the number with commas and decimals
  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}
