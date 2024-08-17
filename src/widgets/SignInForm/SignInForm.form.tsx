import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './SignInForm.schema'
import { FormState } from './SignInForm.types'
import { useFormSubmit } from './SignInForm.hooks'

type SignInFormContextProps = {
  children: ReactNode
}

export const SignInFormForm = ({ children }: SignInFormContextProps) => {
  const methods = useForm<FormState>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = useFormSubmit()

  return (
    <FormProvider {...methods}>
      <form name="basic" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
