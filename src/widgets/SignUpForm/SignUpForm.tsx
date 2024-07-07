import { Button } from '@nextui-org/react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, CustomTooltip, Space } from '@/shared'
import { PasswordInputBlock } from '@/shared/components'
import { FormState } from './SignUpForm.types'
import { schema } from './SignUpForm.schema'

export const SignUpForm = () => {
  const methods = useForm<FormState>({
    resolver: zodResolver(schema),
    mode: 'onChange',
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
            progressProps={{ name: 'passwordProgress' }}
            confirmPasswordProps={{
              name: 'confirmPassword',
              label: 'Подтвердите пароль',
            }}
            key="password"
          />
          <CustomInput<FormState>
            label="Кодовое слово"
            name="secret"
            key="secret"
            description={
              <CustomTooltip content="Кодовое слово необходимо для смены пароля. Важно запомнить его, и не сообщать третьим лицам.">
                Что это ?
              </CustomTooltip>
            }
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
