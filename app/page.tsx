"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"
import TextReveal from "@/components/text-reveal"
import LoadingAnimation from "@/components/loading-animation"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import ParallaxSection from "@/components/parallax-section"
import TransitionLink from "@/components/transition-link"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ScrollToSection from "@/components/scroll-to-section"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Reduce loading time and ensure it completes
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Reduced from 3000ms to 1000ms

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

  const eventDate = new Date("2025-07-05T10:00:00")

  const benefits = [
    {
      title: "Real Talk from Successful Women",
      description:
        "Hear from powerful women who have faced the same struggles you're navigating right now—and came out stronger.",
      icon: <Users className="h-10 w-10 text-luxury-red" />,
    },
    {
      title: "Step-by-Step Guidance",
      description:
        "Get practical strategies to grow your business, level up in your career, and take full control of your year.",
      icon: <CheckCircle className="h-10 w-10 text-luxury-red" />,
    },
    {
      title: "Growth Across Every Area",
      description: "Master how to 10X your life—personally, spiritually, financially, and professionally.",
      icon: <ArrowRight className="h-10 w-10 text-luxury-red" />,
    },
  ]

  const testimonials = [
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

  return (
    <>
      {/* Only show loading animation if in loading state */}
      <AnimatePresence>{loading && <LoadingAnimation />}</AnimatePresence>

      {/* Always render the main content, regardless of loading state */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col"
      >
        <MainNav />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-black to-luxury-red pt-20"
        >
          <div className="container mx-auto px-4 z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <SectionTransition direction="right" delay={0.2}>
                <div className="text-white space-y-6">
                  <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      The Winning Woman <span className="text-luxury-gold">2.0</span>
                    </h1>
                  </TextReveal>

                  <SectionTransition direction="fade" delay={0.6}>
                    <h2 className="text-2xl md:text-3xl font-medium">Building Wealth Inside Out</h2>
                  </SectionTransition>

                  <SectionTransition direction="fade" delay={0.8}>
                    <p className="text-lg md:text-xl text-white/80">
                      Join us for an exclusive event designed to empower ambitious women to build wealth and achieve
                      success in all areas of life.
                    </p>
                  </SectionTransition>

                  <SectionTransition direction="up" delay={1}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <TransitionLink href="https://selar.com/thewinningwoman" animation="left">
                        <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                          Register Now
                        </Button>
                      </TransitionLink>
                      <ScrollToSection targetId="benefits">
                        <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                          Learn More
                        </Button>
                      </ScrollToSection>
                    </div>
                  </SectionTransition>

                  <SectionTransition direction="up" delay={1.2}>
                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-luxury-gold" />
                        <span>July 5, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-luxury-gold" />
                        <span>10:00 AM WAT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-luxury-gold" />
                        <span>Oriental Hotel, Lagos</span>
                      </div>
                    </div>
                  </SectionTransition>
                </div>
              </SectionTransition>

              <SectionTransition direction="left" delay={0.4}>
                <div className="relative">
                  <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/event-venue.png"
                      alt="The Winning Woman 2.0 Event"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                    <CountdownTimer targetDate={eventDate} />
                  </div>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Benefits Preview Section */}
        <section id="benefits" className="py-20 bg-white">
          <ParallaxSection className="w-full">
            <div className="container mx-auto px-4">
              <SectionTransition direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-red">What You'll Experience</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The Winning Woman 2.0 is not just another women's conference. It's a wealth awakening designed to
                    transform your life.
                  </p>
                </div>
              </SectionTransition>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <SectionTransition key={index} direction="up" delay={0.1 * index}>
                    <div className="p-6 flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 flex-grow">{benefit.description}</p>
                    </div>
                  </SectionTransition>
                ))}
              </div>

              <SectionTransition direction="up" delay={0.6}>
                <div className="mt-12 text-center">
                  <TransitionLink href="/about" animation="up">
                    <Button size="lg" className="bg-luxury-red hover:bg-luxury-red/90">
                      Discover More Benefits
                    </Button>
                  </TransitionLink>
                </div>
              </SectionTransition>
            </div>
          </ParallaxSection>
        </section>

        <SectionDivider />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-luxury-red">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Stories</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Hear from women who have transformed their lives through our programs and events.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <div className="max-w-4xl mx-auto">
                <TestimonialCarousel testimonials={testimonials} className="h-[300px] md:h-[250px]" />
              </div>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.5}>
              <div className="mt-12 text-center">
                <TransitionLink href="/testimonials" animation="right">
                  <Button size="lg" className="bg-white hover:bg-white/90 text-luxury-red">
                    View All Testimonials
                  </Button>
                </TransitionLink>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* CTA Section */}
        <section id="register" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-red">Ready to Transform Your Life?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join us at The Winning Woman 2.0 and learn how to build wealth from the inside out.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition direction="up" delay={0.3}>
              <div className="flex justify-center mt-8">
                <TransitionLink href="https://selar.com/thewinningwoman" animation="up">
                  <Button size="lg" className="bg-luxury-red hover:bg-luxury-red/90 text-white">
                    Register Now
                  </Button>
                </TransitionLink>
              </div>
            </SectionTransition>
          </div>
        </section>

        <Footer />
      </motion.main>
    </>
  )
}
