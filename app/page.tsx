import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Image from 'next/image'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import profilePic from '../public/cedric.webp'
import Link from 'next/link'

export default function Home() {
  return (
    <><div className="container">
      
    </div><div className='bg-neutral-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ffbd59]/80'>
        <Header />

        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
          <Experience />
        </section>

        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        <section id='contact' className='snap-center'>
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={profilePic} alt="Cédric Compagnon" />
            </div>
          </footer>
        </Link>
      </div></>
  )
}
