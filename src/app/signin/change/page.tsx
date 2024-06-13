'use client'

import { CenterContainer, FullWidthContainer } from '@/shared'
import { ChangePasswordForm } from '@/widgets'

export default function ChangePasswordPage() {
  return (
    <FullWidthContainer>
      <CenterContainer className="w-full h-full">
        <ChangePasswordForm />
      </CenterContainer>
    </FullWidthContainer>
  )
}
