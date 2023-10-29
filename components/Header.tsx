'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate= {{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* social icon */}
            <SocialIcon label="my LinkedIn Profile" url="https://www.linkedin.com/in/cedriccompagnon/" bgColor='transparent'/>
            <SocialIcon label="my GitHub Profile" url="https://github.com/Cedcomps?tab=repositories" bgColor='transparent'/>
        </motion.div>
        
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate= {{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}>
        <SocialIcon label="my email" className='cursor-pointer' network='email' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex test-sm cursor-pointer'>Get in touch</p>
        </motion.div>
    </header>
  )
}