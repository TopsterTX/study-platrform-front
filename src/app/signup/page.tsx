'use client'

import { CenterContainer, FullWidthContainer } from "@/shared/components";
import { SignUpForm } from "@/widgets";
import { useCallback, useState } from 'react'

const SignUpPage = () => {
  const redirectToSignIn = useCallback(() => router.push('/signin'), [])
  const router = useRouter()
  return (
    <FullWidthContainer>
      <CenterContainer className="w-full h-full">
        <SignUpForm />
      </CenterContainer>
    </FullWidthContainer>
  );
};

export default SignUpPage
