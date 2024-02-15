import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
      <div className="min-h-screen flex flex-col flex-wrap">
        <Navbar/>
        <main className='flex-grow mt-10'>
          {children}
        </main>
        <Footer/>
      </div>
      
        </body>
    </html>
  )
}
