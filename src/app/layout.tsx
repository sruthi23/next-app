import './globals.css'

import Header from './components/header'
import Home from './components/home'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <div>
          <Home />
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
