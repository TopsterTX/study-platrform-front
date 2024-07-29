import { getClassName, Space } from '@/shared'
import { CenterContainerProps } from './types'
import { forwardRef } from 'react'

const CenterContainer = forwardRef<HTMLDivElement, CenterContainerProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <Space
        className={getClassName(
          'h-full flex justify-center items-center',
          className
        )}
        {...rest}
      >
        {children}
      </Space>
    )
  }
)

CenterContainer.displayName = 'CenterContainer'
export default CenterContainer
