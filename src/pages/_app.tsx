import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'
import Header from '../components/header'
import { useRouter } from 'next/router'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname === '/data';
  return (
    <main className={figtree.className}>
      {!isAdminPage && <Header />}
      <Component {...pageProps} />
    </main>
  )
}
