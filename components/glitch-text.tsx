"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>

      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 z-0 text-red-500 opacity-70 transform translate-x-[2px] translate-y-[-2px]">
            {children}
          </span>
          <span className="absolute top-0 left-0 z-0 text-blue-500 opacity-70 transform translate-x-[-2px] translate-y-[2px]">
            {children}
          </span>
        </>
      )}
    </div>
  )
}
