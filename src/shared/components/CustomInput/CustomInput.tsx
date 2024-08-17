'use client'

import { Input, InputProps } from '@nextui-org/react'
import {
  useController,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form'
import { getClassName, Space } from '@/shared'

export type CustomInputProps<T extends FieldValues> = Omit<
  InputProps,
  'name'
> & {
  name: Path<T>
  descriptionClassName?: string
}

export const CustomInput = <T extends FieldValues>({
  description,
  descriptionClassName,
  ...props
}: CustomInputProps<T>) => {
  const { control } = useFormContext<T>()
  const {
    field,
    fieldState: { error },
  } = useController<T>({ control, name: props.name })

  const inputWrapperClasses = props.classNames?.inputWrapper
  const inputWrapperClassesFromProps = Array.isArray(inputWrapperClasses)
    ? [...inputWrapperClasses]
    : [inputWrapperClasses]

  const isError = Boolean(error?.message)
  return (
    <Space className="relative flex-col">
      <Input
        {...props}
        {...field}
        color={error?.message ? 'danger' : 'default'}
        radius="sm"
        size="sm"
        variant="bordered"
        autoComplete="off"
      />
      <Space
        className={getClassName(
          'absolute top-[53px] flex-col',
          descriptionClassName
        )}
      >
        {isError && (
          <p className="text-xs text-red-500 mb-1">{error?.message}</p>
        )}
        {Boolean(description) && description}
      </Space>
    </Space>
  )
}
