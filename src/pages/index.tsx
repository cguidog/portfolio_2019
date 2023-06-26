import Bio from '@/components/Bio'
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { Outfit } from 'next/font/google'
import Script from 'next/script'

const outfit = Outfit({subsets: ['latin']});

export default function Home() {
  return (
    <main className={`${outfit.className}`}>
            <Script id="gtag_script" src="https://www.googletagmanager.com/gtag/js?id=G-Y82ZSGRY20" strategy="lazyOnload"></Script>
        <Script id="gtag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y82ZSGRY20');`}
        </Script>
      <Hero />
      <Bio />
      <Projects />
      <Footer />
    </main>
  )
}
