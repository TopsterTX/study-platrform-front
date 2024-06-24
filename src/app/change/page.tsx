'use client'

import { AnimationWrapper, CenterContainer } from '@/shared'
import { ChangePasswordForm } from '@/widgets'
import { AnimatePresence } from 'framer-motion'

const ChangePasswordPage = () => {
  return (
    <AnimatePresence mode="popLayout">
      <CenterContainer>
        <AnimationWrapper>
          <ChangePasswordForm />
        </AnimationWrapper>
      </CenterContainer>
    </AnimatePresence>
  )
}

export default ChangePasswordPage
