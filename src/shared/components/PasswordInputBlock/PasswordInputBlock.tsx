'use client'

import { type FieldValues, type Path } from 'react-hook-form'
import { Space } from '@/shared'
import type { CustomInputProps } from '@/shared/components/CustomInput/CustomInput'
import { PasswordProgressBar } from '@/shared/components/PasswordProgressBar/PasswordProgressBar'
import { PasswordInput } from '@/shared/components/PasswordInput/PasswordInput'

type PasswordInputBlockProps<T extends FieldValues> = CustomInputProps<T> & {
  progressName?: Path<T>
  confirmPasswordName?: Path<T>
}

export const PasswordInputBlock = <T extends FieldValues>({
  progressName,
  confirmPasswordName,
  ...props
}: PasswordInputBlockProps<T>) => {
  return (
    <>
      <PasswordInput {...props} type="password" />
      <Space className="flex-col gap-4">
        {confirmPasswordName && (
          <PasswordInput
            {...props}
            name={confirmPasswordName}
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
