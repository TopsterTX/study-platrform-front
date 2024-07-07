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
import {
  ERROR_PASSWORD_LENGTH_MAX_PERCENT,
  MAX_PROGRESS_VALUE,
  MIN_PASSWORD_LENGTH,
  SUCCESS_PASSWORD_LENGTH_MIN_PERCENT,
  WARN_PASSWORD_LENGTH_MIN_PERCENT,
} from '@/shared/constants'
import { getPercentValue } from '@/shared'

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

  const getIndexForPercent = (percent: number): number => {
    return getPercentValue(MAX_PROGRESS_VALUE, percent)
  }

  const errorPasswordMaxIndex = getIndexForPercent(
    ERROR_PASSWORD_LENGTH_MAX_PERCENT
  )
  const warnPasswordMinIndex = getIndexForPercent(
    WARN_PASSWORD_LENGTH_MIN_PERCENT
  )
  const successPasswordMinIndex = getIndexForPercent(
    SUCCESS_PASSWORD_LENGTH_MIN_PERCENT
  )

  const colors: Record<number, ProgressProps['color']> = {}
  for (let i = 1; i <= MAX_PROGRESS_VALUE + 1; i++) {
    // TODO Сделать красивее :)
    if (i < errorPasswordMaxIndex) {
      colors[i] = 'danger'
    }
    if (errorPasswordMaxIndex <= i && i < successPasswordMinIndex) {
      colors[i] = 'warning'
    }
    if (i >= successPasswordMinIndex) {
      colors[i] = 'success'
    }
  }

  useEffect(() => {
    const progressLength = Number(passwordValue?.length || 0)
    const progressValue =
      progressLength > MAX_PROGRESS_VALUE ? MAX_PROGRESS_VALUE : progressLength
    onChange(progressValue)
    setCurrentColor(colors[progressValue])
    if (
      confirmationPasswordValue &&
      passwordValue !== confirmationPasswordValue
    ) {
      setCurrentColor('danger')
    }
  }, [passwordValue, confirmationPasswordValue])

  return { ...controller, color: currentColor }
}
