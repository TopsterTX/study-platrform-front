'use client'

import { changePasswordFx } from '@/features'
import { Button, Input } from '@nextui-org/react'
import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CustomInput, PasswordInputBlock, Space } from '@/shared'
import { FormProvider, useForm } from 'react-hook-form'
import { FormState } from './ChangePasswordForm.types'

export const ChangePasswordForm = () => {
  const methods = useForm<FormState>({
    defaultValues: {
      passwordProgress: 0,
      secret: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
  })
  const router = useRouter()
  const loading = useUnit(changePasswordFx.pending)
  changePasswordFx.doneData.watch(() => router.push('/signin'))

  const goBackHandler = () => {
    router.back()
  }

  return (
    <FormProvider {...methods}>
      <Space className="flex flex-col gap-4">
        <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
          <p className="text-3xl text-blue-600 flex font-bold text-center">
            Измение пароля
          </p>
        </Space>
        <form name="basic" autoComplete="off">
          <Space className="w-80 gap-6 flex-col mb-14">
            <CustomInput label="Email" name="email" />
            <CustomInput label="Секретная фраза" name="secret" />
            <PasswordInputBlock
              label="Новый пароль"
              name="password"
              progressProps={{ name: 'passwordProgress' }}
              confirmPasswordProps={{
                name: 'confirmPassword',
                label: 'Подтвердите пароль',
              }}
            />
          </Space>
          <Space className="flex-col gap-4">
            <Button
              type="submit"
              radius="sm"
              variant="shadow"
              color="primary"
              className="min-w-full"
              isLoading={loading}
            >
              Изменить пароль
            </Button>
            <Button
              className="min-w-full"
              variant="light"
              color="primary"
              isLoading={loading}
              onClick={goBackHandler}
            >
              Назад
            </Button>
          </Space>
        </form>
      </Space>
    </FormProvider>
  )
}
