import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '📚libros📚',
  description: 'libros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="max-w-screen-lg m-auto px-4 grid min-h-screen grid-rows-[60px,1fr,60px]">
      <header className='text-2xl flex items-center'>
        📚 Elige que libro leer
      </header>
      <section>
        {children}
      </section>
      <footer className='flex items-center justify-center'>
        con ❤️ Andres Gtz
      </footer>
      </main>
        </body>
    </html>
  )
}
