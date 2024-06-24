import { CenterContainer } from '@/shared'
import { Spinner } from '@nextui-org/react'

export default function Loading() {
  return (
    <CenterContainer className="w-full h-full">
      <Spinner size="lg" />
    </CenterContainer>
  )
}
