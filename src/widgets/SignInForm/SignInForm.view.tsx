'use client'

import { useRouter } from 'next/navigation'
import { Button, Link } from '@nextui-org/react'
import { PasswordInputBlock, CustomInput, Space } from '@/shared'
import { SignInFormForm } from './SignInForm.form'
import { useUnit } from 'effector-react'
import { $signInFxPending, signInFx } from '@/features'

export const SignInForm = () => {
  const [_, signInLoading] = useUnit([signInFx, $signInFxPending])
  const router = useRouter()
  const redirectToSignupHandler = () => router.push('/signup')

  return (
    <SignInFormForm>
      <Space className="flex flex-col gap-4 px-6">
        <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
          <p className="text-3xl text-blue-600 flex font-bold text-center">
            Вход
          </p>
        </Space>

        <Space className="w-80 gap-6 flex-col mb-14">
          <CustomInput label="Почта" name="email" isDisabled={signInLoading} />
          <PasswordInputBlock
            label="Пароль"
            name="password"
            isDisabled={signInLoading}
            description={
              <Link size="sm" href="/change" isDisabled={signInLoading}>
                Забыли пароль?
              </Link>
            }
          />
        </Space>
        <Space className="flex-col gap-4">
          <Button
            type="submit"
            radius="sm"
            variant="shadow"
            color="primary"
            isLoading={signInLoading}
          >
            Войти
          </Button>
          <Button
            variant="light"
            color="primary"
            onClick={redirectToSignupHandler}
            isDisabled={signInLoading}
          >
            Зарегистрироваться
          </Button>
        </Space>
      </Space>
    </SignInFormForm>
  )
}
