import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomInput, Space } from '@/shared'
import { Button, Link } from '@nextui-org/react'

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState()
  const router = useRouter()
  const redirectToSignupHandler = () => router.push('/signup')

  return (
    <Space className="flex flex-col gap-4 px-6">
      <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
        <p className="text-3xl text-blue-600 flex font-bold text-center">
          Вход
        </p>
      </Space>
      <form
        name="basic"
        autoComplete="off"
        className="w-80 flex gap-6 flex-col"
      >
        <CustomInput label="Имя пользователя" />
        <CustomInput
          label="Пароль"
          description={
            <Link size="sm" href="/signin/change">
              Забыли пароль?
            </Link>
          }
        />
        <Space className="flex-col gap-4">
          <Button type="submit" radius="sm" variant="shadow" color="primary">
            Войти
          </Button>
          <Button
            variant="light"
            color="primary"
            onClick={redirectToSignupHandler}
          >
            Зарегистрироваться
          </Button>
        </Space>
      </form>
    </Space>
  )
}
