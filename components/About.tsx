'use client'

import React from 'react'
import Image from 'next/image'
import profilePic from '../public/CedricCompagnon.webp'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='md:my-8 absolute top-14 md:top-24 uppercase tracking-[0.35em] text-gray-500 text-2xl'>About</h3>
        <Image 
        src={profilePic}
        alt=''
        className='-mb-20 md:mb0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Background
             </h4>
             <p className='text-md'>I have 14 years of IT experience in the crisis and emergency incident management industry 🛡️
            <br></br><br></br>
            I help companies identify a relevant problem in order to develop the best solution, and I help my community increase their product skills through mentoring, training.
            <br></br><br></br>
            🔒 Cybersecurity is a field I&apos;m passionate about and I&apos;m developing projects on the side. </p>
        </div>
    </motion.div>
  )
}