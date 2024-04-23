import { request, User } from '@/shared'
import { createEffect } from 'effector'
import { FetchError } from 'ofetch'

type ChangePassportRequestPayload = {
  secret: string
  newPassword: string
}

const changePasswordRequest = async (body: ChangePassportRequestPayload) => {
  const response: User = await request('/auth/change', {
    method: 'PUT',
    body,
  })

  return response
}

export const changePasswordFx = createEffect<
  ChangePassportRequestPayload,
  boolean | undefined
>('changePassword', {
  handler: async (values: ChangePassportRequestPayload) => {
    try {
      const { id } = await changePasswordRequest(values)
      return Boolean(id)
    } catch (error) {
      if (error instanceof FetchError) throw new Error(error.data?.message)
    }
  },
})

changePasswordFx.doneData.watch(console.log)
changePasswordFx.failData.watch(console.log)
