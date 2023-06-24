import Bio from '@/components/Bio'
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { Outfit } from 'next/font/google'

const outfit = Outfit({subsets: ['latin']});

export default function Home() {
  return (
    <main className={`${outfit.className}`}>
      <Hero />
      <Bio />
      <Projects />
      <Footer />
    </main>
  )
}
