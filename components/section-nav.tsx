"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ScrollToSection from "@/components/scroll-to-section"

interface Section {
  id: string
  label: string
}

interface SectionNavProps {
  sections: Section[]
  className?: string
}

export default function SectionNav({ sections, className = "" }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Set up intersection observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-80px 0px -20% 0px", // Adjust based on header height
      threshold: 0.1,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sections])

  return (
    <nav className={`flex justify-center ${className}`}>
      <div className="flex space-x-1 p-1 bg-white/10 backdrop-blur-sm rounded-full">
        {sections.map((section) => (
          <div key={section.id} className="relative">
            <ScrollToSection
              targetId={section.id}
              className={`px-4 py-2 rounded-full relative z-10 transition-colors duration-200 ${
                activeSection === section.id ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {section.label}
            </ScrollToSection>

            {activeSection === section.id && (
              <motion.div
                layoutId="activeSectionIndicator"
                className="absolute inset-0 bg-luxury-red rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
