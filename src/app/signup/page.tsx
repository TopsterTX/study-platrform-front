'use client'

import { CenterContainer, FullWidthContainer } from '@/shared/components'
import { SignUpForm } from '@/widgets'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  return (
    <FullWidthContainer>
      <CenterContainer className="w-full h-full">
        <SignUpForm />
      </CenterContainer>
    </FullWidthContainer>
  )
}

export default SignUpPage
