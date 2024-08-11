import { useRouter } from 'next/navigation'
import { signInFx } from '@/features'
import { Paths } from '@/shared'
import { FormState } from './SignInForm.types'
import { onSubmitHandler } from '@/widgets/SignInForm/SignInForm.utils'

export const useFormSubmit = () => {
  const router = useRouter()

  return async (data: FormState) => {
    const result = await onSubmitHandler(data)
    router.push(Paths.HOME)
  }
}
