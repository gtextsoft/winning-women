"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import TransitionLink from "@/components/transition-link"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutPage() {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About The Event</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Learn more about The Winning Woman 2.0 and the vision behind this transformative event.
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* About Event Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionTransition direction="right">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-luxury-red mb-4">The Winning Woman 2.0</h2>
                  <p className="text-lg text-gray-700">
                    The Winning Woman 2.0 is an exclusive event designed to empower ambitious women to build wealth and
                    achieve success in all areas of life.
                  </p>
                  <p className="text-lg text-gray-700">
                    This is not another women's conference. This is a wealth awakening! At The Winning Woman 2.0, you
                    won't just learn how to make money... You'll learn how to embody it! How to build from within so
                    that wealth finds you, flows through you, and multiplies around you.
                  </p>
                  <p className="text-lg text-gray-700">
                    We're bringing powerful conversations, real-life transformations, and high-level teachings from
                    women that don't just talk the talk, but walk it! — all delivered in an elegant, nurturing space
                    designed with you in mind.
                  </p>
                </div>
              </SectionTransition>

              <SectionTransition direction="left" delay={0.2}>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/event-venue.png"
                    alt="The Winning Woman 2.0 Event"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Host Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-red">Meet Your Host</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From broke housewife to 9-figure CEO: How Mrs. Bisi Akintayo defied the odds
                </p>
              </div>
            </SectionTransition>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionTransition direction="right">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/host-portrait.png"
                    alt="Mrs. Bisi Akintayo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-luxury-red text-white p-4">
                    <p className="font-bold">Mrs. Bisi Akintayo</p>
                    <p className="text-sm">Forbes blk member</p>
                  </div>
                </div>
              </SectionTransition>

              <SectionTransition direction="left" delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Over ten years ago, I was a housewife with nothing to my name except a car gifted to me as an
                    inheritance by my now Late mother-in-law. At the time, my husband's business was struggling, BUT I
                    still had to depend solely on him for every little thing — even as small as money to buy salt!
                  </p>

                  <p className="text-lg leading-relaxed">
                    He never complained or treated me as lesser because I could not contribute financially but my
                    situation made me feel powerless until I got sick and tired of it!
                  </p>

                  <p className="text-lg leading-relaxed">
                    That spurred me to make a daring decision to invest my last N20,000 (56$ at the time) — into an
                    e-commerce course that taught me "the art of selling online."
                  </p>

                  <p className="text-lg leading-relaxed">
                    This constant advice and push from her drilled a goal-driven work-ethic into me which enabled me to
                    build wealth for myself and my family— with a business that generates millions monthly!
                  </p>

                  <div className="pt-4">
                    <TransitionLink href="/speakers" animation="left">
                      <Button size="lg" className="bg-luxury-red hover:bg-luxury-red/90">
                        Meet All Speakers
                      </Button>
                    </TransitionLink>
                  </div>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* CTA Section */}
        <section className="py-20 bg-luxury-red text-white">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on July 5, 2025</h2>
                <p className="text-xl max-w-3xl mx-auto mb-8">
                  Limited to 100 women to ensure quality networking and personalized attention. Don't miss this
                  opportunity to transform your life and business!
                </p>
                <TransitionLink href="/register" animation="up">
                  <Button size="lg" className="bg-white text-luxury-red hover:bg-white/90">
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
