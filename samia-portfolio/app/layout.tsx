import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samia Rahman - CS Portfolio',
  description: 'Portfolio of Samia Rahman, Computer Science student at University of Alberta',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}