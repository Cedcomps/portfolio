'use client'
import React from 'react'
import Image from 'next/image'
import experiencesData from './ExperiencesData'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-neutral-700 snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <img
          src={experience.imageSrc} 
          alt={`${experience.company} - ${experience.title}`}
          className='w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.title}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <p className='font-thin text-xl'>{experience.purpose}</p>
        <div className='flex space-x-2 my-2'>
          {/* Ici, vous pouvez mapper les technologies utilisées */}
          {experience.techs.map((tech, index) => (
            <img
              key={index}
              className='scale-75 h-10 w-10 '
              src={tech} // Assurez-vous que les images des technologies sont correctement définies dans les données d'expérience
              alt={tech}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{experience.date}</p>
        <ul className='list-disc space-y-4 ml-5 text-md'>
          {experience.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}