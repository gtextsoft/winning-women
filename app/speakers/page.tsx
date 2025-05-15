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

export default function SpeakersPage() {
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

  const speakers = [
    {
      name: "Mrs. Bisi Akintayo",
      title: "Host | Serial Entrepreneur | Business Coach",
      image: "/images/host-portrait.png",
      bio: "From broke housewife to 9-figure CEO, Mrs. Bisi Akintayo is a serial entrepreneur, business coach, author, and Forbes blk member. She is currently a member of the Board of Directors of Gtext Group, a multi-million dollar conglomerate whose services cut across Real Estate and Global Empowerment.",
      topic: "From Zero to Millions: Building Wealth from Scratch",
    },
    {
      name: "Mrs. Jumoke Shotonwa",
      title: "Founder of Kwasee Style Company",
      image: "/images/Shotonwa.jpg",
      bio: "Founder of Kwasee Style Company and Co-founder of The Lagos Wardrobe & Exhibition (TLWE). With over 15 years in the fashion industry, Mrs. Shotonwa has built a brand that caters to high-profile clients across Africa.",
      topic: "Building a Luxury Brand in a Competitive Market",
    },
    {
      name: "Mrs. Kiki Okewale",
      title: "CEO of Hope by Kiki Okewale",
      image: "/images/kiki.jpg",
      bio: "CEO of Hope by Kiki Okewale, Co-founder of Teledoc App and WFM 91.7, and Founder of WhatRybe. Mrs. Okewale has successfully built multiple businesses across different industries.",
      topic: "Diversifying Your Income: Managing Multiple Business Ventures",
    },
    {
      name: "Pastor (Mrs) Seun Osigbesan",
      title: "Actor | Creative Director",
      image: "/images/Seun.jpg",
      bio: "Actor, Creative Director of Styled by Zsheunic, Author, Filmmaker, and Founder of Zsheunic Mentorship Academy (ZMA). Mrs. Osigbesan has mentored hundreds of women in the creative industry.",
      topic: "Balancing Faith, Family, and Business: The Complete Woman",
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Speakers</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Meet the powerful women who will be sharing their knowledge and experiences at The Winning Woman 2.0
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Speakers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {speakers.map((speaker, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <SectionTransition direction={index % 2 === 0 ? "right" : "left"}>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        fill
                        className={`object-cover ${speaker.name === "Mrs. Kiki Okewale" ? "object-[center_20%]" : "object-top"}`}
                        priority={index === 0}
                      />
                    </div>
                  </SectionTransition>

                  <SectionTransition direction={index % 2 === 0 ? "left" : "right"} delay={0.2}>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-luxury-red">{speaker.name}</h2>
                      <p className="text-xl text-gray-700">{speaker.title}</p>
                      <div className="h-1 w-20 bg-luxury-gold"></div>
                      <p className="text-lg text-gray-700">{speaker.bio}</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Speaking On:</h3>
                        <p className="text-luxury-red font-medium">{speaker.topic}</p>
                      </div>
                    </div>
                  </SectionTransition>
                </div>
                {index < speakers.length - 1 && <SectionDivider className="my-10" />}
              </div>
            ))}
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* CTA Section */}
        <section className="py-20 bg-luxury-red text-white">
          <div className="container mx-auto px-4">
            <SectionTransition direction="up">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn from These Amazing Women</h2>
                <p className="text-xl max-w-3xl mx-auto mb-8">
                  Don't miss this opportunity to hear their stories, learn from their experiences, and connect with them
                  in person.
                </p>
                <TransitionLink href="https://selar.com/thewinningwoman" animation="up">
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
