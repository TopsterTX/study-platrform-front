import { CenterContainer } from '@/shared'
import { Spinner } from '@nextui-org/react'

export default function Loading() {
  return (
    <CenterContainer className="w-svw h-svh">
      <Spinner size="lg" />
    </CenterContainer>
  )
}
