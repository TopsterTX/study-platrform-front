import { createStore } from 'effector'
import { changeErrorEvent, changeIsAuthEvent } from './events'

export const $auth = createStore<{ error: string | null; isAuth: boolean }>({
  error: null,
  isAuth: false,
})

$auth.on(changeErrorEvent, (state, error) => ({
  ...state,
  error,
}))

$auth.on(changeIsAuthEvent, (state, isAuth) => ({
  ...state,
  isAuth,
}))
