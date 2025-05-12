"use client"

import { type ReactNode, useContext } from "react"
import Link from "next/link"
import { PageTransitionContext } from "@/context/page-transition-context"

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  animation?: "up" | "down" | "left" | "right" | "fade"
  onClick?: () => void
}

export default function TransitionLink({
  href,
  children,
  className = "",
  animation = "fade",
  onClick,
}: TransitionLinkProps) {
  const { setExitAnimation } = useContext(PageTransitionContext)

  const handleClick = () => {
    setExitAnimation(animation)
    if (onClick) onClick()
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
