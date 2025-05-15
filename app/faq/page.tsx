"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import TransitionLink from "@/components/transition-link"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function FaqPage() {
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

  const faqs = [
    {
      question: "Who is this event for?",
      answer:
        "The Winning Woman 2.0 is designed for ambitious women who are serious about achieving financial independence, leadership excellence, and personal growth. Whether you're just starting your entrepreneurial journey or looking to scale your existing business, this event is for you.",
    },
    {
      question: "What will I learn at the event?",
      answer:
        "You'll learn practical strategies for building wealth, growing your business, and achieving success in all areas of life. Topics include starting a business with limited resources, building a luxury brand, managing multiple business ventures, and balancing work, family, and personal life.",
    },
    {
      question: "When and where is the event taking place?",
      answer:
        "The event will be held on July 5, 2025, from 10:00 AM to 5:00 PM WAT at the Oriental Hotel, Victoria Island, Lagos, Nigeria.",
    },
    {
      question: "How much does it cost to attend?",
      answer:
        "We offer two pricing options: Early Bird registration at ₦20,000 (limited to the first 50 registrants) and Regular registration at ₦50,000. Both options include full access to the conference, networking opportunities, exclusive workbook and materials, certificate of participation, and lunch and refreshments.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes! We offer a 100% satisfaction money-back guarantee. If you're not satisfied with the event and you feel you didn't receive valuable information you can implement, you can email our support team for a full refund with zero hassle.",
    },
    {
      question: "How many people will be attending?",
      answer:
        "The event is limited to 100 women to ensure quality networking and personalized attention. This intimate setting allows for meaningful connections and more direct access to the speakers.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "The event includes dedicated networking sessions during registration and lunch break. Additionally, the intimate setting of 100 attendees creates natural opportunities for connecting with like-minded women throughout the day.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "We recommend bringing a notebook and pen for taking notes (though we will provide a workbook), business cards for networking, and an open mind ready to learn and grow. Dress code is business casual.",
    },
    {
      question: "Will food be provided?",
      answer: "Yes, lunch and refreshments will be provided as part of your registration fee.",
    },
    {
      question: "What if I can't make it after paying?",
      answer:
        "If you're unable to attend after registering, you can transfer your ticket to someone else or request a refund up to 14 days before the event. After that, we can only offer ticket transfers, not refunds.",
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Find answers to common questions about The Winning Woman 2.0 event
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTransition direction="up">
                <Accordion type="single" collapsible className="space-y-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                      <AccordionTrigger className="text-lg font-bold text-luxury-red hover:text-luxury-red/80 px-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-4 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SectionTransition>

              <SectionTransition direction="up" delay={0.4}>
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-gray-600 mb-8">
                    If you couldn't find the answer to your question, please feel free to contact us directly.
                  </p>
                  <TransitionLink href="/contact" animation="up">
                    <Button className="bg-luxury-red hover:bg-luxury-red/90">Contact Us</Button>
                  </TransitionLink>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
                <p className="text-xl max-w-3xl mx-auto mb-8">
                  Secure your spot at The Winning Woman 2.0 and transform your life and business.
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
