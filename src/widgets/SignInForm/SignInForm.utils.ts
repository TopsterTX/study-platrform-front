import { FormState } from './SignInForm.types'
import { signInFx } from '@/features'

export const onSubmitHandler = async (data: FormState) => {
  const { email, password } = data

  return await signInFx({
    email: email || '',
    password: password || '',
  })
}
