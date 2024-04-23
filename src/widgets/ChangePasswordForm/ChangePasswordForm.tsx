import { changePasswordFx } from '@/features'
import { Button, Form, Input } from 'antd'
import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'
import { DEFAULT_VALIDATE_TEXT } from '@/shared'

const { Item } = Form

export default function ChangePasswordForm() {
  const router = useRouter()
  const loading = useUnit(changePasswordFx.pending)
  changePasswordFx.doneData.watch(() => router.push('/signin'))

  return (
    <Form
      name="basic"
      autoComplete="off"
      layout="horizontal"
      onFinish={changePasswordFx}
      className="min-w-full"
    >
      <Item
        name="email"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input autoComplete="off" placeholder="Email" />
      </Item>
      <Item
        name="secret"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input autoComplete="off" placeholder="Секретная фраза" />
      </Item>
      <Item
        name="password"
        rules={[{ required: true, message: DEFAULT_VALIDATE_TEXT }]}
      >
        <Input.Password autoComplete="off" placeholder="Новый пароль" />
      </Item>
      <Item>
        <Button
          htmlType="submit"
          type="primary"
          className="min-w-full"
          loading={loading}
        >
          Изменить пароль
        </Button>
      </Item>
    </Form>
  )
}
