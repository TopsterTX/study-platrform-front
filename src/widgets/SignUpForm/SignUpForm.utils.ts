import { FormEventHandler } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'
import { signUpFx } from '@/features'
import { FormState } from './SignUpForm.types'

export const onSubmit = async (data: FormState) => {
  const { username, email, secret, password } = data

  const result = await signUpFx({
    name: username || '',
    email: email || '',
    password: password || '',
    secret: secret || '',
  })
}
