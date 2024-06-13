import { Input, InputProps } from '@nextui-org/react'

export type CustomInputProps = InputProps

export const CustomInput = ({ ...props }: CustomInputProps) => {
  const inputWrapperClasses = props.classNames?.inputWrapper
  const inputWrapperClassesFromProps = Array.isArray(inputWrapperClasses)
    ? [...inputWrapperClasses]
    : [inputWrapperClasses]
  return (
    <Input
      {...props}
      radius="sm"
      size="sm"
      variant="bordered"
      autoComplete="off"
      classNames={{
        ...props.classNames,
        inputWrapper: [
          ...inputWrapperClassesFromProps,
          'border-blue-600',
          'hover:!border-blue-400',
          'group-data-[focus=true]:!border-blue-600', // Focus
          '!transition-all',
          '!duration-300',
        ],
      }}
    />
  )
}
