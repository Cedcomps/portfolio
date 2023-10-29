import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Image from 'next/image'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className='bg-neutral-900 h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
      
      {/* Contact Me */}
    
    </div>
  )
}
