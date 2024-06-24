import { Metadata } from 'next'
// import { forwardRef } from 'react'
// import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

type LayoutProps = Readonly<{
  children: React.ReactNode
}>

// Configure Metadata
export const metadata: Metadata = {
  title: 'SignIn',
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex justify-center items-center min-h-svh">
      {children}
    </main>
  )
}
