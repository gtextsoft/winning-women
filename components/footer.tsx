"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import ScrollToSection from "@/components/scroll-to-section"
import TransitionLink from "@/components/transition-link"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Check if we're on the home page
  const isHomePage = typeof window !== "undefined" && window.location.pathname === "/"

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 font-playfair">The Winning Woman</h3>
            <p className="text-gray-400 mb-4">
              Empowering women to build wealth and achieve success in all areas of life.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {isHomePage ? (
                <>
                  <li>
                    <ScrollToSection targetId="hero" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </ScrollToSection>
                  </li>
                  <li>
                    <ScrollToSection targetId="benefits" className="text-gray-400 hover:text-white transition-colors">
                      Benefits
                    </ScrollToSection>
                  </li>
                  <li>
                    <ScrollToSection
                      targetId="testimonials"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Testimonials
                    </ScrollToSection>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <TransitionLink href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink href="/speakers" className="text-gray-400 hover:text-white transition-colors">
                      Speakers
                    </TransitionLink>
                  </li>
                </>
              )}
              <li>
                <TransitionLink href="/schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </TransitionLink>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-luxury-red" />
                <a
                  href="mailto:bisiakintayoconsult@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  bisiakintayoconsult@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-luxury-red" />
                <a href="tel:+2348150239005" className="text-gray-400 hover:text-white transition-colors">
                  +234 815 023 9005
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Event Details</h3>
            <p className="text-gray-400 mb-2">July 5, 2025</p>
            <p className="text-gray-400 mb-2">10:00 AM WAT</p>
            <p className="text-gray-400">Oriental Hotel, Victoria Island, Lagos</p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} The Winning Woman. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
