import { createEffect } from 'effector'
import { FetchError } from 'ofetch'
import { request } from '@/shared'
import { DefaultResponse } from '@/shared/types'

const logoutRequest = async () => {
  const response: DefaultResponse = await request('/auth/logout', {
    method: 'POST',
  })

  return response
}

export const logoutFx = createEffect<() => void>('logout', {
  handler: async () => {
    try {
      await logoutRequest()
    } catch (error) {
      if (error instanceof FetchError) throw new Error(error.data?.message)
    }
  },
})

export const $logoutFxPending = logoutFx.pending
