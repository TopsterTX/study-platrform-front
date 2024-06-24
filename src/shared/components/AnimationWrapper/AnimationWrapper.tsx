'use client'

import { forwardRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

export const AnimationWrapper = forwardRef<
  HTMLDivElement,
  { children: ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      {...props}
      className="w-full h-full"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {props.children}
    </motion.div>
  )
})

AnimationWrapper.displayName = 'AnimationWrapper'
