import { request } from '@/shared'

export const getCurrentUserDataRequest = async () =>
  await request('/user/me', {
    method: 'GET',
  })
