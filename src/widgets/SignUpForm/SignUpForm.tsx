import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomInput, Space } from '@/shared'

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const redirectToSignInHandler = () => router.push('/signin')

  return (
    <Space className="flex-col gap-4">
      <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
        <p className="text-3xl text-blue-600 flex font-bold items-center justify-center">
          Регистрация
        </p>
        <p className="text-sm text-center flex">
          Создайте аккаунт и окунитесь в мир обучения с головой !
        </p>
      </Space>
      <form
        name="basic"
        autoComplete="off"
        className="w-80 flex gap-6 flex-col"
      >
        <CustomInput label="Имя пользователя" />
        <CustomInput label="Почта" />
        <CustomInput type="password" label="Пароль" />
        <CustomInput label="Кодовое слово" />
        <Space className="flex-col gap-y-4">
          <Button type="submit" radius="sm" variant="shadow" color="primary">
            Создать аккаунт
          </Button>
          <Button
            variant="light"
            color="primary"
            onClick={redirectToSignInHandler}
          >
            Уже есть аккаунт ?
          </Button>
        </Space>
      </form>
    </Space>
  )
}
