'use client'

import { Progress } from '@nextui-org/react'
import { FieldValues, Path } from 'react-hook-form'
import { usePasswordProgressBar } from './PasswordProgressBar.hooks'
import { Space } from '@/shared'

type PasswordProgressBarProps<T extends FieldValues> = {
  name: Path<T>
  passwordName: Path<T>
  confirmPasswordName?: Path<T>
}

export const PasswordProgressBar = <T extends FieldValues>({
  name,
  passwordName,
  confirmPasswordName,
}: PasswordProgressBarProps<T>) => {
  const {
    field: { value },
    color,
  } = usePasswordProgressBar(name, passwordName, confirmPasswordName)

  return (
    <Space>
      <Progress value={Number(value)} color={color} size="md" />
    </Space>
  )
}
