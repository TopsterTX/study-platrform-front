import { useRouter } from 'next/navigation'
import { useUnit } from 'effector-react'
import { Button, Flex, Form, Input } from 'antd'
import { signInFx } from '@/features'
import { DEFAULT_VALIDATE_TEXT } from '@/shared'

export default function SignInForm() {
  const loading = useUnit(signInFx.pending)
  const router = useRouter()

  const redirectToSignUpHandler = () => router.push('/signup')

  return (
    <Form
      name="basic"
      autoComplete="off"
      layout="horizontal"
      onFinish={signInFx}
      className="min-w-full"
      disabled={loading}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input autoComplete="off" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input.Password autoComplete="off" placeholder="Пароль" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="min-w-full"
          loading={loading}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}
