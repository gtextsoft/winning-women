"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import SectionDivider from "@/components/section-divider"
import LoadingAnimation from "@/components/loading-animation"
import { motion, AnimatePresence } from "framer-motion"

export default function RegisterPage() {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Register Now</h1>
                <p className="text-xl max-w-3xl mx-auto text-white/80">
                  Secure your spot at The Winning Woman 2.0 and join us for this transformative event
                </p>
              </div>
            </SectionTransition>
          </div>
        </section>

        <SectionDivider color="luxury-gold" />

        {/* Registration Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <SectionTransition direction="right">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-luxury-red">Event Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-6 w-6 text-luxury-red" />
                      <span className="text-lg">July 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-luxury-red" />
                      <span className="text-lg">10:00 AM WAT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-luxury-red" />
                      <span className="text-lg">Oriental Hotel, Victoria Island, Lagos</span>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Full access to the conference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Networking opportunities with successful women</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Exclusive workbook and materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Certificate of participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Lunch and refreshments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-luxury-red/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-luxury-red">100% Satisfaction Guarantee</h3>
                    <p>
                      If you're not satisfied with the event and you feel you didn't receive valuable information you
                      can implement, you can email our support team for a full refund with zero hassle.
                    </p>
                  </div>
                </div>
              </SectionTransition>

              <SectionTransition direction="left" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-luxury-red mb-8">Registration Options</h2>
                  <Tabs defaultValue="early-bird" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="early-bird">Early Bird</TabsTrigger>
                      <TabsTrigger value="regular">Regular</TabsTrigger>
                    </TabsList>
                    <TabsContent value="early-bird">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">Early Bird Offer</h3>
                              <p className="text-gray-600 mb-4">For the first 50 women to register</p>
                              <div className="text-3xl font-bold text-luxury-red mb-6">₦20,000</div>
                            </div>

                            <form className="space-y-4">
                              <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Full Name</Label>
                                  <Input id="name" placeholder="Your full name" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email Address</Label>
                                  <Input id="email" type="email" placeholder="Your email address" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="phone">Phone Number</Label>
                                  <Input id="phone" placeholder="Your phone number" />
                                </div>
                              </div>

                              <Button type="submit" className="w-full bg-luxury-red hover:bg-luxury-red/90">
                                Secure Your Spot
                              </Button>
                            </form>

                            <div className="text-sm text-gray-500 text-center">
                              Only 50 early bird tickets available. Don't miss this opportunity to save ₦30,000!
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="regular">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">Regular Registration</h3>
                              <p className="text-gray-600 mb-4">Standard registration fee</p>
                              <div className="text-3xl font-bold text-luxury-red mb-6">₦50,000</div>
                            </div>

                            <form className="space-y-4">
                              <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name-regular">Full Name</Label>
                                  <Input id="name-regular" placeholder="Your full name" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email-regular">Email Address</Label>
                                  <Input id="email-regular" type="email" placeholder="Your email address" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="phone-regular">Phone Number</Label>
                                  <Input id="phone-regular" placeholder="Your phone number" />
                                </div>
                              </div>

                              <Button type="submit" className="w-full bg-luxury-red hover:bg-luxury-red/90">
                                Register Now
                              </Button>
                            </form>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
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
