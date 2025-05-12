"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface SpeakerCardProps {
  speaker: {
    name: string
    title: string
    image: string
    bio: string
  }
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
          >
            <p className="text-white text-sm">{speaker.bio}</p>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
          <p className="text-luxury-red text-sm">{speaker.title}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
