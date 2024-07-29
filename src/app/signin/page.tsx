'use client'

import { AnimatePresence } from 'framer-motion'
import { CenterContainer, AnimationWrapper } from '@/shared/components'
import { SignInForm } from '@/widgets'

const SignInPage = () => {
  return (
    <AnimatePresence mode="popLayout">
      <CenterContainer>
        <AnimationWrapper>
          <SignInForm />
        </AnimationWrapper>
      </CenterContainer>
    </AnimatePresence>
  )
}

SignInPage.displayName = 'SignInPage'
export default SignInPage
