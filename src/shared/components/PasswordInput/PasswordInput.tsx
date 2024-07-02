'use client'

import { EyeFilledIcon, EyeSlashFilledIcon } from '@nextui-org/shared-icons'
import { CustomInput } from '@/shared'
import { FieldValues } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { CustomInputProps } from '@/shared/components/CustomInput/CustomInput'

export const PasswordInput = <T extends FieldValues>(
  props: CustomInputProps<T>
) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])

  return (
    <CustomInput
      {...props}
      name={props.name}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
    />
  )
}
