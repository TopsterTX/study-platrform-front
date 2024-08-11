import { request, User } from '@/shared'
import { createEffect, createStore } from 'effector'
import { FetchError } from 'ofetch'

const getCurrentUserDataRequest = async () => {
  const response: User = await request('/user/me', {
    method: 'GET',
  })

  return response
}

export const getCurrentUserDataFx = createEffect('getCurrentUserData', {
  handler: async () => {
    try {
      return await getCurrentUserDataRequest()
    } catch (error) {
      if (error instanceof FetchError) throw new Error(error.data?.message)
    }
  },
})

export const $getCurrentUserData = createStore({})
export const $getCurrentUserDataError = createStore({})

export const $getCurrentUserDataFxPending = getCurrentUserDataFx.pending
$getCurrentUserData.on(getCurrentUserDataFx.doneData, (_, payload) => payload)
$getCurrentUserDataError.on(
  getCurrentUserDataFx.failData,
  (_, payload) => payload
)
