'use client'

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence } from 'framer-motion'

type ProvidersProps = {
  children: ReactNode
}

export const ClientProviders = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </NextUIProvider>
  )
}
