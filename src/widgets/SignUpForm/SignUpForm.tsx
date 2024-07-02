import { Button } from '@nextui-org/react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { CustomInput, Space } from '@/shared'
import { FormState } from './SignUpForm.types'
import { PasswordInputBlock } from '@/shared/components/PasswordInputBlock/PasswordInputBlock'

export const SignUpForm = () => {
  const methods = useForm<FormState>({
    defaultValues: {
      username: null,
      password: null,
      confirmPassword: null,
      email: null,
      secret: null,
      passwordProgress: 0,
    },
  })

  const {
    control,
    formState: { isDirty },
  } = methods
  const passwordValue = useWatch({ control, name: 'password' })

  const router = useRouter()
  const redirectToSignInHandler = () => router.push('/signin')

  return (
    <FormProvider {...methods}>
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
          <CustomInput<FormState>
            label="Имя пользователя"
            name="username"
            key="username"
          />
          <CustomInput<FormState> label="Почта" name="email" key="email" />
          <PasswordInputBlock<FormState>
            type="password"
            label="Пароль"
            name="password"
            progressName="passwordProgress"
            confirmPasswordName="confirmPassword"
            key="password"
          />
          <CustomInput<FormState>
            label="Кодовое слово"
            name="secret"
            key="secret"
          />
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
    </FormProvider>
  )
}
