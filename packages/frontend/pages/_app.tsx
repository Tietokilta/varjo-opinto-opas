import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] gap-10 bg-gray-50 p-4">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
