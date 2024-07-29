import { Metadata } from 'next'

type LayoutProps = Readonly<{
  children: React.ReactNode
}>

// Configure Metadata
export const metadata: Metadata = {
  title: 'SignIn',
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex justify-center items-center min-h-svh">
      {children}
    </main>
  )
}
