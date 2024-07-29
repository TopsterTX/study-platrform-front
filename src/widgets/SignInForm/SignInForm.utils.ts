import { FormState } from './SignInForm.types'
import { signInFx } from '@/features'

export const onSubmit = async (data: FormState) => {
  const { email, password } = data

  const result = await signInFx({
    email: email || '',
    password: password || '',
  })
}
