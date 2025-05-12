"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play, QuoteIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface Testimonial {
  quote: string
  author: string
  title: string
  image?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isMobile = useMobile()

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [nextTestimonial, autoPlayInterval, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevTestimonial()
      } else if (e.key === "ArrowRight") {
        nextTestimonial()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextTestimonial, prevTestimonial])

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {/* Main carousel content */}
        <div className="relative h-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm shadow-lg">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col p-6 md:p-8"
            >
              <QuoteIcon className="h-10 w-10 text-luxury-gold mb-4" />
              <p className="text-white text-lg md:text-xl mb-6 flex-grow">{testimonials[currentIndex].quote}</p>
              <div className="flex items-center gap-4">
                {testimonials[currentIndex].image && (
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-luxury-gold">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="object-cover h-full w-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-white/70 text-sm">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-luxury-gold w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Previous/Next buttons */}
        {!isMobile && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10 z-10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10 z-10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Play/Pause button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full h-8 w-8 z-10"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play autoplay" : "Pause autoplay"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
