/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Roboto, Contrail_One } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const contrailOne = Contrail_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-contrail-one',
})

export const metadata: Metadata = {
  title: 'Lucas Neves - Desenvolvedor Front-end',
  description: 'Portfólio de Lucas Neves, Desenvolvedor Front-end',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={`${roboto.variable} ${contrailOne.variable}`}>
        <div className="relative flex flex-col w-full gap-5 justify-start bg-neutral-900 ">
          <main className="w-screen h-fit gap-14 lg:gap-0 lg:mb-10 flex flex-col lg:mx-auto bg-neutral-900 lg:w-full lg:max-w-[76rem]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

// No arquivo layout é adicionado todo o conteudo que serão renderizados em todas as páginas do site.
