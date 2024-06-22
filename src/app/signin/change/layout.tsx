import { Metadata } from 'next'

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Change Password | Study Platform',
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex justify-center items-center min-h-svh">
      {children}
    </main>
  )
}
