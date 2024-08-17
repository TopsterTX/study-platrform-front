'use client'

import { Button } from '@nextui-org/react'
import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CustomInput, CustomTooltip, Space } from '@/shared'
import { PasswordInputBlock } from '@/shared/components'
import { FormState } from './SignUpForm.types'
import { signUpFx, $signUpFxPending } from '@/features'
import { SignUpFormForm } from '@/widgets/SignUpForm/SignUpForm.form'

const SecretDescription = () => (
  <CustomTooltip content="Кодовое слово необходимо для смены пароля. Важно запомнить его, и не сообщать третьим лицам.">
    <p className="text-xs text-blue-600">Что это ?</p>
  </CustomTooltip>
)

export const SignUpForm = () => {
  const [_, signUpLoading] = useUnit([signUpFx, $signUpFxPending])
  const router = useRouter()

  const redirectToSignInHandler = () => router.push('/signin')

  return (
    <SignUpFormForm>
      <Space className="flex-col gap-4">
        <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
          <p className="text-3xl text-blue-600 flex font-bold items-center justify-center">
            Регистрация
          </p>
          <p className="text-sm text-center flex">
            Создайте аккаунт и окунитесь в мир обучения с головой !
          </p>
        </Space>
        <Space className="w-80 gap-6 flex-col mb-14">
          <CustomInput<FormState>
            label="Имя пользователя"
            name="username"
            key="username"
            isDisabled={signUpLoading}
          />
          <CustomInput<FormState>
            label="Почта"
            name="email"
            key="email"
            isDisabled={signUpLoading}
          />
          <PasswordInputBlock<FormState>
            type="password"
            label="Пароль"
            name="password"
            progressProps={{ name: 'passwordProgress' }}
            confirmPasswordProps={{
              name: 'confirmPassword',
              label: 'Подтвердите пароль',
              isDisabled: signUpLoading,
            }}
            key="password"
            isDisabled={signUpLoading}
          />
          <CustomInput<FormState>
            label="Кодовое слово"
            name="secret"
            key="secret"
            isDisabled={signUpLoading}
            description={<SecretDescription />}
          />
        </Space>
        <Space className="flex-col gap-y-4">
          <Button
            type="submit"
            radius="sm"
            variant="shadow"
            color="primary"
            isLoading={signUpLoading}
          >
            Создать аккаунт
          </Button>
          <Button
            variant="light"
            color="primary"
            onClick={redirectToSignInHandler}
            isDisabled={signUpLoading}
          >
            Уже есть аккаунт ?
          </Button>
        </Space>
      </Space>
    </SignUpFormForm>
  )
}
