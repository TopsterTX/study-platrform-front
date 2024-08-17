'use client'

import { Tooltip, TooltipProps } from '@nextui-org/react'
import { ReactNode } from 'react'

type CustomTooltipProps = TooltipProps & {
  children: ReactNode
}

export const CustomTooltip = ({ children, ...props }: CustomTooltipProps) => {
  return <Tooltip {...props}>{children}</Tooltip>
}
