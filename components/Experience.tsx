'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
    className='h-screen overflow-hidden flex-col  text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center flex relative'>
    <h3 className='absolute top-24 uppercase tracking-[0.35em] text-gray-500 text-2xl'>
        Experience
    </h3>
    <div className='w-full flex space-w-5 overflow-x-scroll p-10 snap-x snap-mandatory '>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
    </div>
    </motion.div>
  )
}