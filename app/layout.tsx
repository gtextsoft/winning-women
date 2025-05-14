import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransitionProvider } from "@/context/page-transition-context"
import PageTransition from "@/components/page-transition"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "The Winning Woman 2.0 | Building Wealth Inside Out",
  description:
    "Join us for an exclusive event designed to empower ambitious women to build wealth and achieve success in all areas of life.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <PageTransitionProvider>
            <ScrollProgress />
            <ScrollToTop />
            <PageTransition>{children}</PageTransition>
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
