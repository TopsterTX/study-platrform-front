'use client'

import { createEffect, createEvent, createStore, sample } from 'effector'
import { getCurrentUserDataRequest } from './actions.server'

export const getCurrentUserDataFx = createEffect(getCurrentUserDataRequest)

export const $getCurrentUserData = createStore({})
export const $getCurrentUserDataError = createStore({})
export const $getCurrentUserDataFxPending = getCurrentUserDataFx.pending

$getCurrentUserData.on(getCurrentUserDataFx.doneData, (_, payload) => payload)
$getCurrentUserDataError.on(
  getCurrentUserDataFx.failData,
  (_, payload) => payload
)

export const getUserDataEvent = createEvent()

sample({
  clock: getUserDataEvent,
  target: getCurrentUserDataFx,
})
