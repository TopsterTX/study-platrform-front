export type Role = 'ADMIN' | 'USER' | 'AUTHOR'

export type User = {
  id: string
  name: string
  email: string
  hashPassword: string
  role: Role
  secret: string
}
