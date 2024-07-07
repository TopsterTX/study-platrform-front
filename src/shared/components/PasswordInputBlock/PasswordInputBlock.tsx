'use client'

import { type FieldValues, type Path } from 'react-hook-form'
import { Space } from '@/shared'
import type { CustomInputProps } from '@/shared/components/CustomInput/CustomInput'
import { PasswordProgressBar } from '@/shared/components/PasswordProgressBar/PasswordProgressBar'
import { PasswordInput } from '@/shared/components/PasswordInput/PasswordInput'
import { ProgressProps } from '@nextui-org/react'

type PasswordInputBlockProps<T extends FieldValues> = CustomInputProps<T> & {
  progressProps?: ProgressProps & {
    name: Path<T>
  }
  confirmPasswordProps?: CustomInputProps<T>
}

export const PasswordInputBlock = <T extends FieldValues>({
  progressProps,
  confirmPasswordProps,
  ...props
}: PasswordInputBlockProps<T>) => {
  const { name: progressName } = progressProps ?? {}
  const { name: confirmPasswordName } = confirmPasswordProps ?? {}

  return (
    <>
      <PasswordInput {...props} type="password" />
      <Space className="flex-col gap-4">
        {confirmPasswordName && (
          <PasswordInput
            {...confirmPasswordProps}
            name={confirmPasswordName as string}
            label="Подтвердите пароль"
          />
        )}
        {progressName && (
          <PasswordProgressBar
            confirmPasswordName={confirmPasswordName}
            passwordName={props.name}
            name={progressName}
          />
        )}
      </Space>
    </>
  )
}
