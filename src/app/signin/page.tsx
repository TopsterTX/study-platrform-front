'use client'

import { Button, Flex, Form, Space, Typography } from 'antd'
import { CenterContainer } from '@/shared'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { SignInForm } from '@/widgets'

const { Title } = Typography
const { Item } = Form

const LoginPage = () => {
  const router = useRouter()
  // const response = await request("/users", { method: "GET" });

  const redirectToSignUp = useCallback(() => router.push('/signup'), [])
  const redirectToChangePassword = useCallback(
    () => router.push('/signin/change'),
    []
  )

  return (
    <CenterContainer vertical className="min-w-full">
      <Title level={2}>Вход</Title>
      <SignInForm />
      <Flex justify="space-between" className="min-w-full">
        <Button
          type="link"
          onClick={redirectToChangePassword}
          style={{ padding: '0' }}
        >
          Забыл пароль
        </Button>
        <Button type="link" onClick={redirectToSignUp} style={{ padding: '0' }}>
          Зарегистрироваться
        </Button>
      </Flex>
    </CenterContainer>
  )
}

export default LoginPage
