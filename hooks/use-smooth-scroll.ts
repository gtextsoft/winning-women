"use client"

import { useCallback, useEffect } from "react"

interface SmoothScrollOptions {
  offset?: number
  behavior?: ScrollBehavior
  onComplete?: () => void
}

export function useSmoothScroll({ offset = 0, behavior = "smooth", onComplete }: SmoothScrollOptions = {}) {
  // Function to handle smooth scrolling to a target element
  const scrollToElement = useCallback(
    (targetId: string) => {
      // Remove the # if it's included
      const id = targetId.startsWith("#") ? targetId.substring(1) : targetId

      // Find the target element
      const targetElement = document.getElementById(id)

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset

        // Perform the scroll
        window.scrollTo({
          top: targetPosition,
          behavior,
        })

        // Call onComplete callback after scrolling is done
        if (onComplete) {
          // Approximate scroll completion based on distance and timing
          const scrollDistance = Math.abs(window.scrollY - targetPosition)
          const scrollDuration = Math.min(Math.max(scrollDistance / 3, 500), 1000) // Between 500ms and 1000ms

          setTimeout(onComplete, scrollDuration)
        }
      }
    },
    [offset, behavior, onComplete],
  )

  // Handle clicks on anchor links
  const handleLinkClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.hash && link.pathname === window.location.pathname) {
        e.preventDefault()
        scrollToElement(link.hash)

        // Update URL without scrolling
        window.history.pushState(null, "", link.hash)
      }
    },
    [scrollToElement],
  )

  // Set up event listeners
  useEffect(() => {
    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [handleLinkClick])

  // Handle initial hash in URL
  useEffect(() => {
    if (window.location.hash) {
      // Delay to ensure page is fully loaded
      setTimeout(() => {
        scrollToElement(window.location.hash)
      }, 500)
    }
  }, [scrollToElement])

  return { scrollToElement }
}
