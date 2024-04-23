import { Button, Flex, Form, Input } from 'antd'
import { useUnit } from 'effector-react'
import { signUpFx } from '@/features'
import { SignUpRequestPayload } from '@/features/signUpHandler/signUpHandler'
import { DEFAULT_VALIDATE_TEXT } from '@/shared'

export default function SignUpForm() {
  const loading = useUnit(signUpFx.pending)

  return (
    <Form
      name="basic"
      autoComplete="off"
      layout="horizontal"
      onFinish={signUpFx}
      className="min-w-full"
      disabled={loading}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input autoComplete="off" placeholder="Имя пользователя" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input autoComplete="off" placeholder="Почта" />
      </Form.Item>
      <Form.Item
        className="mb-1"
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
          Создать аккаунт
        </Button>
      </Form.Item>
    </Form>
  )
}
