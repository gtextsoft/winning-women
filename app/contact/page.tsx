"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Have questions about The Winning Woman 2.0? We're here to help!
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <SectionTransition direction="right">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-luxury-red">Get In Touch</h2>
                  <p className="text-lg text-gray-700">
                    We'd love to hear from you! Whether you have questions about the event, need assistance with
                    registration, or want to explore partnership opportunities, our team is ready to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-luxury-red mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-gray-700">bisiakintayoconsult@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-luxury-red mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-gray-700">+234 815 023 9005</p>
                        <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9am to 5pm WAT</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-luxury-red mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Event Location</h3>
                        <p className="text-gray-700">Oriental Hotel, Victoria Island, Lagos, Nigeria</p>
                        <p className="text-sm text-gray-500 mt-1">July 5, 2025 | 10:00 AM WAT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionTransition>

              <SectionTransition direction="left" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-luxury-red mb-8">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Your email address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is your message about?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={6} />
                    </div>

                    <Button type="submit" className="bg-luxury-red hover:bg-luxury-red/90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>

        <Footer />
      </motion.main>
    </>
  )
}
