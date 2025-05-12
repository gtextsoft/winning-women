"use client"

import { createContext, useState, type ReactNode } from "react"

type ExitAnimation = "up" | "down" | "left" | "right" | "fade"

interface PageTransitionContextType {
  exitAnimation: ExitAnimation
  setExitAnimation: (animation: ExitAnimation) => void
}

export const PageTransitionContext = createContext<PageTransitionContextType>({
  exitAnimation: "fade",
  setExitAnimation: () => {},
})

interface PageTransitionProviderProps {
  children: ReactNode
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const [exitAnimation, setExitAnimation] = useState<ExitAnimation>("fade")

  return (
    <PageTransitionContext.Provider value={{ exitAnimation, setExitAnimation }}>
      {children}
    </PageTransitionContext.Provider>
  )
}
