import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'
import Footer from './Footer'
import { ThemeProvider } from './ThemeProvider'
import { ReduxProvider } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Database',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <NavMenu />
            <main className='flex-grow w-full max-w-content-width mx-auto px-2 sm:px-4'>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
