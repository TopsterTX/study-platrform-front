import zod from 'zod'

export const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
})
