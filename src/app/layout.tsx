import './globals.css'
import type { Metadata } from 'next'
import { Inter, Luckiest_Guy  } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const luckiestGuy = Luckiest_Guy({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Memory Game',
  description: 'Memory game create by Claudio Baeza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={luckiestGuy.className}>
    <main className='min-h-screen grid place-content-center bg-[--background]'>
        {children}
    </main>
    </body>
  </html>
  )
}
