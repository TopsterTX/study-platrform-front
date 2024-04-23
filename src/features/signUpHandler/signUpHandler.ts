import { createEffect } from 'effector'
import { FetchContext, FetchError, FetchResponse, IFetchError } from 'ofetch'
import { changeErrorEvent, request } from '@/shared'

export type SignUpRequestPayload = {
  name: string
  email: string
  password: string
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
      return await signUpHandler(body)
    } catch (error) {
      if (error instanceof FetchError) {
        changeErrorEvent(error.data.message)
      }
    }
  },
})

signUpFx.doneData.watch(console.log)
signUpFx.failData.watch(console.log)
