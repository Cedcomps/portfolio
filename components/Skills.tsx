'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SkillsData from './skillsData'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:max-w-7xl px-4 md:px-10 xl:px-20 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='md:my-8 absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {SkillsData.map((skill, index) => (
          <div key={index} className='group relative flex cursor-pointer'>
            <motion.img
              initial={{ opacity: 0}}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0}}
              src={skill.imageUrl}
              alt={skill.title}
              className=' object-cover -scale-150 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
              <div className='flex flex-col items-center h-full justify-center'>
                <p className='text-sm md:text-md font-bold text-black opacity-100 text-center'>
                  {skill.title}
                </p>
                <p className='text-lg md:text-2xl font-bold text-black opacity-100'>
                  {skill.progression}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}