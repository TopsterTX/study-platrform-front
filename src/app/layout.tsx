import { ReactNode } from 'react'
import { EffectorNext } from '@effector/next'
import cn from 'classnames'
import { Inter } from 'next/font/google'
import { ClientProviders } from '@/configs'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'h-full')}>
        <EffectorNext>
          <ClientProviders>{children}</ClientProviders>
        </EffectorNext>
      </body>
    </html>
  )
}
