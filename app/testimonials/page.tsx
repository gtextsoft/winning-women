"use client"

import { useEffect, useState } from "react"
import MainNav from "@/components/main-nav"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import TestimonialCarousel from "@/components/testimonial-carousel"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialsPage() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Ensure content is shown even if loading state persists
  useEffect(() => {
    // Force loading to false after a maximum time
    const forceLoadTimer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(forceLoadTimer)
  }, [])

  if (!mounted) return null

  const featuredTestimonials = [
    {
      quote:
        "The Winning Woman conference completely transformed my approach to business. I implemented the strategies and saw my revenue double in just 3 months!",
      author: "Sarah Johnson",
      title: "Founder, Bloom Beauty",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Mrs. Bisi's mentorship gave me the confidence to finally launch my business. Her practical advice and encouragement were exactly what I needed.",
      author: "Amara Okafor",
      title: "CEO, Tech Solutions Africa",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The network of women I connected with at this event has been invaluable. We continue to support each other and grow together.",
      author: "Fatima Mohammed",
      title: "Real Estate Investor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I was skeptical at first, but this event exceeded all my expectations. The practical strategies I learned helped me scale my business by 300% in one year.",
      author: "Jennifer Okoli",
      title: "Digital Marketing Consultant",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The Winning Woman event was the turning point in my career. I gained clarity on my purpose and the confidence to pursue it wholeheartedly.",
      author: "Chioma Eze",
      title: "Founder, Wellness Collective",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const allTestimonials = [
    ...featuredTestimonials,
    {
      quote:
        "I never thought I could start my own business until I attended The Winning Woman. Now I'm running a successful online store and mentoring other women.",
      author: "Grace Adebayo",
      title: "E-commerce Entrepreneur",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The financial literacy session alone was worth the price of admission. I've completely transformed how I manage my personal and business finances.",
      author: "Blessing Nwankwo",
      title: "Financial Consultant",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a single mother, I was struggling to balance work and family. The strategies I learned at this event helped me create systems that gave me back my time and sanity.",
      author: "Yewande Oladipo",
      title: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The connections I made at The Winning Woman led to partnerships that increased my business revenue by 150% in just six months.",
      author: "Halima Suleiman",
      title: "Fashion Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <>
      <AnimatePresence>{loading && <LoadingAnimation />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col"
      >
        <MainNav />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-r from-black to-luxury-red">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Hear from women who have transformed their lives through The Winning Woman events
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Featured Testimonials Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-red">Featured Testimonials</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These women have experienced remarkable transformations after attending our events.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <div className="max-w-4xl mx-auto">
                <TestimonialCarousel
                  testimonials={featuredTestimonials}
                  className="h-[300px] md:h-[250px] bg-luxury-red rounded-xl"
                />
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* All Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-red">More Testimonials</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Read more inspiring stories from our community of successful women.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4 text-luxury-gold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                      </div>

                      <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>

                      <div className="flex items-center mt-auto">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                          {/* Replace with actual images */}
                          <div className="absolute inset-0 bg-luxury-red/20" />
                        </div>
                        <div>
                          <p className="font-semibold text-luxury-red">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionTransition>
          </div>
        </section>
      </motion.main>
    </>
  )
}
