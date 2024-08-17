import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { FormState } from '@/widgets/SignUpForm/SignUpForm.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '@/widgets/SignUpForm/SignUpForm.schema'
import { onSubmit } from '@/widgets/SignUpForm/SignUpForm.utils'

export type SignUpFormContextProps = {
  children: ReactNode
}

export const SignUpFormForm = ({ children }: SignUpFormContextProps) => {
  const methods = useForm<FormState>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      secret: '',
      passwordProgress: 0,
    },
  })

  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form name="basic" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
