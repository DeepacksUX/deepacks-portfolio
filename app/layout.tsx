import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Source-sans-pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepack Raja - Strategic Design Leader',
  description: 'Portfolio of Deepack Raja, a Strategic Design Leader with over 10 years of experience in UX, UI, and product design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
