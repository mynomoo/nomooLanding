import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'
import Header from '../components/header'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={figtree.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
