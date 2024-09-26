'use client'
import React from 'react'
import BackgroundCircles from '@/components/BackgroundCircles'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import profilePic from '../public/cedric.webp'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, I\'m Cédric 👔', 'I shape Products', 'I develop with Next.js', 'I create communication bridge'],
        loop: true,
        delaySpeed: 2000,
          })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto'
        src={profilePic}
        alt='Cédric Compagnon'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[.35em]'>
          Product Manager, Technical Product Owner
        </h2>
        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold px-4 lg:px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#8b9d63' />
        </h1>
        <div className='pt-5 space-x-4'>
          <Link href='#about'><button className='heroButton'>About</button></Link>
          <Link href='#experience'><button className='heroButton'>Experience</button></Link>
          <Link href='#skills'><button className='heroButton'>Skills</button></Link>
          <Link href='#projects'><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  )
}