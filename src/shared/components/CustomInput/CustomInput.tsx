'use client'

import { Input, InputProps } from '@nextui-org/react'
import {
  useController,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form'

export type CustomInputProps<T extends FieldValues> = Omit<
  InputProps,
  'name'
> & {
  name: Path<T>
}

export const CustomInput = <T extends FieldValues>({
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
  return (
    <article className="relative">
      <Input
        {...props}
        {...field}
        errorMessage={error?.message || ''}
        color={error?.message ? 'danger' : 'default'}
        radius="sm"
        size="sm"
        variant="bordered"
        autoComplete="off"
        // classNames={{
        //   ...props.classNames,
        //   inputWrapper: [
        //     ...inputWrapperClassesFromProps,
        //     'border-blue-600',
        //     'hover:!border-blue-400',
        //     'group-data-[focus=true]:!border-blue-600', // Focus
        //     '!transition-all',
        //     '!duration-300',
        //   ],
        // }}
      />
      {error?.message && (
        <p className="absolute top-[50px] text-xs text-red-500">
          {error?.message}
        </p>
      )}
    </article>
  )
}
