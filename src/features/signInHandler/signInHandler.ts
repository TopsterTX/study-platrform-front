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

export const signInFx = createEffect<(data: SignInRequestPayload) => void>(
  'signIn',
  {
    handler: async (values: SignInRequestPayload) => {
      try {
        await signInRequest(values)
      } catch (error) {
        if (error instanceof FetchError) throw new Error(error.data?.message)
      }
    },
  }
)

export const $signInFxPending = signInFx.pending
