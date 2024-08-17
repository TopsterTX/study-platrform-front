import { FetchOptions, ofetch } from 'ofetch'

const baseConfig: FetchOptions = {
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
}

export const request = async (url: string, options?: FetchOptions) =>
  await ofetch(url, { ...options, credentials: 'include', ...baseConfig })
