"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollToSectionProps {
  targetId: string
  children: ReactNode
  className?: string
  offset?: number
  onClick?: () => void
}

export default function ScrollToSection({
  targetId,
  children,
  className = "",
  offset = 80, // Default offset to account for fixed header
  onClick,
}: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Find the target element
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Calculate position
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset

      // Perform smooth scroll
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update URL without scrolling
      window.history.pushState(null, "", `#${targetId}`)
    }

    // Call additional onClick handler if provided
    if (onClick) onClick()
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
