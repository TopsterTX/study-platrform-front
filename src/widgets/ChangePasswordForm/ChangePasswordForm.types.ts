import { FormState as SignUpFormState } from '../SignUpForm/SignUpForm.types'

export type FormState = Pick<
  SignUpFormState,
  'email' | 'secret' | 'password' | 'confirmPassword' | 'passwordProgress'
>
