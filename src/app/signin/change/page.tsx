'use client'

import { Button, Flex, Typography } from 'antd'
import { CenterContainer } from '@/shared'
import { ChangePasswordForm } from '@/widgets'

const { Title } = Typography

export default function ChangePasswordPage() {
  return (
    <CenterContainer vertical className="min-w-full">
      <Title level={2}>Смена пароля</Title>
      <ChangePasswordForm />
    </CenterContainer>
  )
}
