'use client'
import React from 'react'
import Image from 'next/image'
import F24Pic from '../public/fact24.webp'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-neutral-700 snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{ y: -100, opacity:0 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{ duration:1.2 }}
        viewport={{once:true}}
        >
            <Image 
            src={F24Pic}
            alt='F24 - Incident and crisis management, emergency­ notification ISO/IEC 27001'
            className='w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Senior Product Manager</h4>
            <p className='font-bold text-2xl mt-1'>F24</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma logo" />
                {/* tech used */}
                {/* tech used */}
                {/* tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>date</p>
            <ul className='list-disc space-y-4 ml-5 text-md'>
                <li>Accomplishment</li>
                <li>Accomplishment</li>
                <li>Accomplishment</li>
                <li>Accomplishment</li>
            </ul>
        </div>
    </article>
  )
}