'use client'

import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
  const widths = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }

  const mediaQueries = {
    sm: `(min-width: ${widths.sm}px)`,
    md: `(min-width: ${widths.md}px)`,
    lg: `(min-width: ${widths.lg}px)`,
    xl: `(min-width: ${widths.xl}px)`,
  }

  const [queries, setQueries] = useState<
    Record<keyof typeof mediaQueries, boolean>
  >({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const handleResize = () => {
    setQueries({
      sm:
        window.matchMedia(mediaQueries.sm).matches ||
        window.innerWidth < widths.sm,
      md: window.matchMedia(mediaQueries.md).matches,
      lg: window.matchMedia(mediaQueries.lg).matches,
      xl:
        window.matchMedia(mediaQueries.xl).matches ||
        window.innerWidth > widths.xl,
    })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return queries
}
