import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

const tomato = localFont({
  src: [
    {
      path: '../../public/fonts/tomatogrotesk-regular.woff',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/tomatogrotesk-bold.woff',
      weight: 'bold',
    }
  ],
  variable: '--font-tomato',
})

export const metadata: Metadata = {
  title: 'Ighor Rafael | Dev front-end',
  description: 'Um pouco do que sei fazer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${tomato.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
