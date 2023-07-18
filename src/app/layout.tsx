import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biblioteca del rock and roll en México y Latinoamérica',
  description: 'Bienvenido a la Biblioteca del Rock, aquí encontrarás todo lo relacionado con el apasionante mundo del rock and roll en México y Latinoamérica. Descubre una amplia colección de libros, álbumes, documentales y memorabilia que celebran la rica historia y cultura de la música rock. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
