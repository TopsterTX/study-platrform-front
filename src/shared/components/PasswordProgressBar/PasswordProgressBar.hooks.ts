import {
  FieldValues,
  Path,
  useController,
  UseControllerReturn,
  useFormContext,
  useWatch,
} from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ProgressProps } from '@nextui-org/react'

type UsePasswordProgressBar<T extends FieldValues> = UseControllerReturn<
  T,
  Path<T>
> & {
  color: ProgressProps['color']
}

export const usePasswordProgressBar = <T extends FieldValues>(
  name: Path<T>,
  passwordName: Path<T>,
  confirmPasswordName?: Path<T>
): UsePasswordProgressBar<T> => {
  const { control } = useFormContext<T>()
  const [currentColor, setCurrentColor] =
    useState<ProgressProps['color']>('danger')
  const controller = useController({
    name,
    control,
  })

  const passwordValue = useWatch({ control, name: passwordName })
  const confirmationPasswordValue = useWatch({
    control,
    name: confirmPasswordName as Path<T>,
  })

  const {
    field: { ref, value, onChange },
  } = controller

  const colors: Record<number, ProgressProps['color']> = {}
  const progressValues: Record<number, number> = {}
  for (let i = 1; i <= 11; i++) {
    progressValues[i] = i * 10
    colors[i] = 'primary'
  }

  useEffect(() => {
    onChange(progressValues[passwordValue?.length] || 0)
    if (
      passwordValue?.length > 5 ||
      (confirmationPasswordValue && confirmationPasswordValue === passwordValue)
    ) {
      setCurrentColor('success')
    }
    if (
      confirmationPasswordValue &&
      passwordValue !== confirmationPasswordValue
    ) {
      setCurrentColor('danger')
    }
  }, [passwordValue, confirmationPasswordValue])

  return { ...controller, color: currentColor }
}
