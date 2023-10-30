'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import experiencesData from './ExperiencesData'


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
    className='h-screen overflow-hidden flex-col  text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center flex relative'>
    <h3 className='md:my-8 absolute top-14 md:top-24  uppercase tracking-[0.35em] text-gray-500 text-2xl'>
        Experience
    </h3>
    <div className='w-full flex space-w-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8b9d63]/80'>
          {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
    </div>
    </motion.div>
  )
}