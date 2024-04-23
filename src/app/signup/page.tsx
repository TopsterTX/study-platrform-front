'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { CenterContainer } from '@/shared/components'
import { SignUpForm } from '@/widgets'

const SignUpPage = () => {
  const { Title } = Typography
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const redirectToSignIn = useCallback(() => router.push('/signin'), [])

  return (
    <CenterContainer vertical className="min-w-full">
      <Title level={2}>Регистрация</Title>
      <SignUpForm />
      <Button type="link" onClick={redirectToSignIn} style={{ padding: '0' }}>
        Уже есть аккаунт ?
      </Button>
    </CenterContainer>
  )
}

export default SignUpPage
