import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Ubuntu, Calistoga } from 'next/font/google'
import HeaderMenu from '@/components/HeaderMenu'
import Footer from '@/components/Footer'

const ubuntu = Ubuntu({ subsets: ['latin'], weight:[ '300','400', '500', '700']})
const calistoga = Calistoga({subsets: ['latin-ext'], weight:[ '400']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <HeaderMenu />
        {children}
        <Footer />
        </body>
    </html>
  )
}
