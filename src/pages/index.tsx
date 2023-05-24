import Bio from '@/components/Bio'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { Outfit } from 'next/font/google'

const outfit = Outfit({subsets: ['latin']});

export default function Home() {
  return (
    <main className={`${outfit.className} bg-slate-200`}>
      <Hero />
      <Bio />
      <Projects />
    </main>
  )
}
