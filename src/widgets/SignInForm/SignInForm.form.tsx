import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './SignInForm.schema'
import { onSubmit } from './SignInForm.utils'
import { FormState } from './SignInForm.types'

type SignInFormContextProps = {
  children: ReactNode
}

export const SignInFormForm = ({ children }: SignInFormContextProps) => {
  const methods = useForm<FormState>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
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
