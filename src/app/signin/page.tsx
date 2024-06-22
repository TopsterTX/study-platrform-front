'use client'

import { CenterContainer, FullWidthContainer } from '@/shared/components'
import { SignInForm } from '@/widgets'

const SignInPage = () => {
  return (
    <CenterContainer className="w-full h-full ">
      <SignInForm />
    </CenterContainer>
  )
}

export default SignInPage
