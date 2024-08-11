import { ReactNode } from 'react'
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
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
