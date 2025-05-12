"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import TransitionLink from "@/components/transition-link"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function SchedulePage() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const scheduleItems = [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Registration & Networking",
      description: "Arrive early to register, collect your materials, and network with other attendees.",
    },
    {
      time: "10:00 AM - 10:30 AM",
      title: "Welcome Address",
      description: "Opening remarks and introduction to The Winning Woman 2.0 by Mrs. Bisi Akintayo.",
      speaker: "Mrs. Bisi Akintayo",
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "From Zero to Millions: Building Wealth from Scratch",
      description:
        "Learn how to start building wealth with limited resources and the mindset required for financial success.",
      speaker: "Mrs. Bisi Akintayo",
    },
    {
      time: "11:30 AM - 12:30 PM",
      title: "Building a Luxury Brand in a Competitive Market",
      description:
        "Strategies for creating and growing a premium brand that stands out in today's competitive marketplace.",
      speaker: "Mrs. Jumoke Shotonwa",
    },
    {
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break & Networking",
      description: "Enjoy a delicious lunch while connecting with speakers and fellow attendees.",
    },
    {
      time: "1:30 PM - 2:30 PM",
      title: "Diversifying Your Income: Managing Multiple Business Ventures",
      description: "How to successfully run multiple businesses without burning out or losing focus.",
      speaker: "Mrs. Kiki Okewale",
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "Balancing Faith, Family, and Business: The Complete Woman",
      description:
        "Practical strategies for maintaining balance in all areas of life while building a successful business.",
      speaker: "Pastor (Mrs) Seun Osigbesan",
    },
    {
      time: "3:30 PM - 4:30 PM",
      title: "Panel Discussion: Overcoming Challenges as a Woman in Business",
      description:
        "An interactive panel discussion with all speakers sharing their experiences and answering questions.",
      speaker: "All Speakers",
    },
    {
      time: "4:30 PM - 5:00 PM",
      title: "Closing Remarks & Next Steps",
      description: "Final thoughts, action steps, and information on future events and opportunities.",
      speaker: "Mrs. Bisi Akintayo",
    },
  ]

  return (
    <>
      <AnimatePresence>{loading && <LoadingAnimation />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col"
      >
        <MainNav />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-r from-black to-luxury-red">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Event Schedule</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  A full day of inspiration, learning, and networking on July 5, 2025
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Schedule Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-luxury-red/20"></div>

                {scheduleItems.map((item, index) => (
                  <SectionTransition key={index} direction="up" delay={0.05 * index}>
                    <div className="relative mb-12">
                      <div className="absolute left-8 top-6 -ml-3.5 h-7 w-7 rounded-full bg-luxury-red flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                      </div>

                      <Card className="ml-16 hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-luxury-red mb-2">
                            <Clock className="h-5 w-5" />
                            <span className="font-medium">{item.time}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          {item.speaker && (
                            <div className="mt-3 inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                              Speaker: {item.speaker}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </SectionTransition>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* CTA Section */}
        <section className="py-20 bg-luxury-red text-white">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
                <p className="text-xl max-w-3xl mx-auto mb-8">
                  Don't miss this opportunity to learn from these amazing speakers and transform your life and business.
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
