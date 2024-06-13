import { createEffect } from 'effector'
import { FetchError } from 'ofetch'
import { request } from '@/shared'

type SignInRequestPayload = {
  email: string
  password: string
}

type SignInResponse = {
  access_token: string | null
}

const signInRequest = async (body: SignInRequestPayload) => {
  const response: SignInResponse = await request('/auth/signIn', {
    method: 'POST',
    body,
  })

  return response
}

export const signInFx = createEffect<
  SignInRequestPayload,
  string | null | undefined
>('signIn', {
  handler: async (values: SignInRequestPayload) => {
    try {
      const { access_token: token } = await signInRequest(values)
      return token
    } catch (error) {
      if (error instanceof FetchError) throw new Error(error.data?.message)
    }
  },
})

signInFx.doneData.watch(console.log)
signInFx.failData.watch(console.log)
