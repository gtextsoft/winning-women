"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import TransitionLink from "@/components/transition-link"
import ScrollToSection from "@/components/scroll-to-section"

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true) // Default to true for initial render
  const [pathname, setPathname] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Get current pathname
    const currentPath = window.location.pathname
    setPathname(currentPath)

    // Check if we're on the home page
    setIsHomePage(currentPath === "/" || currentPath === "")

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  }

  // Define navigation links
  const navLinks = isHomePage
    ? [
        { name: "Home", href: "#hero", isSection: true },
        { name: "Benefits", href: "#benefits", isSection: true },
        { name: "Testimonials", href: "#testimonials", isSection: true },
        { name: "Register", href: "#register", isSection: true },
        { name: "About", href: "/about", isSection: false },
        { name: "Speakers", href: "/speakers", isSection: false },
        { name: "FAQ", href: "/faq", isSection: false },
      ]
    : [
        { name: "Home", href: "/", isSection: false },
        { name: "About", href: "/about", isSection: false },
        { name: "Speakers", href: "/speakers", isSection: false },
        { name: "FAQ", href: "/faq", isSection: false },
        { name: "Contact", href: "/contact", isSection: false },
      ]

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {isHomePage ? (
            <ScrollToSection targetId="hero" className="flex items-center">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`font-playfair text-2xl font-bold ${isScrolled ? "text-luxury-red" : "text-white"}`}
              >
                The Winning Woman
              </motion.span>
            </ScrollToSection>
          ) : (
            <TransitionLink href="/" animation="fade" className="flex items-center">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`font-playfair text-2xl font-bold ${isScrolled ? "text-luxury-red" : "text-white"}`}
              >
                The Winning Woman
              </motion.span>
            </TransitionLink>
          )}

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} custom={i} variants={linkVariants}>
                {link.isSection ? (
                  <ScrollToSection
                    targetId={link.href.substring(1)}
                    className={`text-sm font-medium hover:text-luxury-gold transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {link.name}
                  </ScrollToSection>
                ) : (
                  <TransitionLink
                    href={link.href}
                    animation={i % 2 === 0 ? "up" : "down"}
                    className={`text-sm font-medium hover:text-luxury-gold transition-colors ${
                      pathname === link.href ? "text-luxury-gold" : isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                )}
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <TransitionLink href="/register" animation="left">
              <Button
                className={`${
                  isScrolled
                    ? "bg-luxury-red hover:bg-luxury-red/90 text-white"
                    : "bg-white hover:bg-white/90 text-luxury-red"
                }`}
              >
                Register Now
              </Button>
            </TransitionLink>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {link.isSection ? (
                    <ScrollToSection
                      targetId={link.href.substring(1)}
                      className="text-gray-700 hover:text-luxury-red py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollToSection>
                  ) : (
                    <TransitionLink
                      href={link.href}
                      animation="fade"
                      className={`py-2 block ${
                        pathname === link.href ? "text-luxury-red" : "text-gray-700 hover:text-luxury-red"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </TransitionLink>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <TransitionLink href="/register" animation="left" className="block w-full">
                  <Button className="bg-luxury-red hover:bg-luxury-red/90 w-full">Register Now</Button>
                </TransitionLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
