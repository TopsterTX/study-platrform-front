import { changePasswordFx } from '@/features'
import { Button, Input } from '@nextui-org/react'
import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CustomInput, Space } from '@/shared'

export const ChangePasswordForm = () => {
  const router = useRouter()
  const loading = useUnit(changePasswordFx.pending)
  changePasswordFx.doneData.watch(() => router.push('/signin'))

  const goBackHandler = () => {
    router.back()
  }

  return (
    <Space className="flex flex-col gap-4">
      <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
        <p className="text-3xl text-blue-600 flex font-bold text-center">
          Измение пароля
        </p>
      </Space>
      <form
        name="basic"
        autoComplete="off"
        className="w-80 flex gap-6 flex-col"
      >
        <CustomInput label="Email" />
        <CustomInput label="Секретная фраза" />
        <CustomInput type="password" label="Новый пароль" />
        <CustomInput type="password" label="Повторите пароль" />
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
  )
}
