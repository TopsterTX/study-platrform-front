'use client'

import { AnimationWrapper, CenterContainer } from '@/shared/components'
import { SignUpForm } from '@/widgets'
import { AnimatePresence } from 'framer-motion'

const SignUpPage = () => {
  return (
    <AnimatePresence mode="popLayout">
      <CenterContainer>
        <AnimationWrapper>
          <SignUpForm />
        </AnimationWrapper>
      </CenterContainer>
    </AnimatePresence>
  )
}

export default SignUpPage
