import { createEffect } from 'effector'
import { FetchError } from 'ofetch'
import { changeErrorEvent, request } from '@/shared'

export type SignUpRequestPayload = {
  name: string
  email: string
  password: string
  secret: string
}

type SignUpResponse = {
  access_token: string
}

const signUpHandler = async (
  body: SignUpRequestPayload
): Promise<SignUpResponse> => {
  return await request('/auth/signup', {
    method: 'POST',
    body,
  })
}

export const signUpFx = createEffect<
  SignUpRequestPayload,
  SignUpResponse | undefined
>('signUp', {
  handler: async (body) => {
    try {
      const response = await signUpHandler(body)

      return response
    } catch (error) {
      if (error instanceof FetchError) {
        changeErrorEvent(error.data.message)
      }
    }
  },
})

export const $signUpFxPending = signUpFx.pending
