import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Black Box Choir',
  description: 'The Black Box Choir is an experimental sound installation that explores the intersection of technology, music, and human interaction',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
