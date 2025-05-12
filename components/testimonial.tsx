"use client"

import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialProps {
  testimonial: {
    quote: string
    author: string
    title: string
  }
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <QuoteIcon className="h-8 w-8 text-white/50 mb-4" />
          <p className="text-white mb-6 flex-grow">{testimonial.quote}</p>
          <div>
            <p className="font-bold">{testimonial.author}</p>
            <p className="text-white/70 text-sm">{testimonial.title}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
