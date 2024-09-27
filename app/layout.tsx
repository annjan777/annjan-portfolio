import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ThemeProvider } from './ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Annjan Arora - Portfolio',
  description: 'Software Developer and IoT Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}