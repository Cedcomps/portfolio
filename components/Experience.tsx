'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import experiencesData from './ExperiencesData'


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen overflow-hidden flex flex-col md:flex-row max-w-full px-4 md:px-10 lg:px-20 xl:px-24 justify-evenly mx-auto items-center relative'
    >
      <h3 className='md:my-8 absolute top-14 mb-8 md:top-24 uppercase tracking-[0.35em] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-2 md:space-x-10 overflow-x-auto p-4 md:p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffbd59]/80'>
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}