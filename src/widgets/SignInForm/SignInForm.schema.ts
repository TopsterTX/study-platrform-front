import zod from 'zod'
import {
  ERROR_PASSWORD_LENGTH_MAX_PERCENT,
  MAX_PROGRESS_VALUE,
} from '@/shared/constants/auth'
import { getPercentValue } from '@/shared'

const minPasswordLength = getPercentValue(
  MAX_PROGRESS_VALUE,
  ERROR_PASSWORD_LENGTH_MAX_PERCENT
)

export const schema = zod.object({
  email: zod.string().email('Неверная почта'),
  password: zod.string().min(minPasswordLength, 'Неверный пароль'),
})