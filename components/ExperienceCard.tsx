'use client'
import React from 'react'
import Image from 'next/image'
import experiencesData from './ExperiencesData'
import { motion } from 'framer-motion'

type Props = {experience: {
  imageSrc: string;
  company: string;
  title: string;
  purpose: string;
  date: string;
  accomplishments: string[];
}}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-3/4 xl:w-4/5 bg-neutral-700 snap-center p-4 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <img
          src={experience.imageSrc}
          alt={`${experience.company} - ${experience.title}`}
          className='w-32 h-32 md:w-48 md:h-48 xl:w-72 xl:h-72 rounded-full object-cover object-center'
        />
      </motion.div>
      <div className='px-4 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-light'>{experience.title}</h4>
        <p className='font-bold text-xl md:text-2xl mt-1'>{experience.company}</p>
        <p className='font-thin text-lg md:text-xl'>{experience.purpose}</p>
        <div className='flex space-x-2 my-2'></div>
        <p className='uppercase py-2 md:py-5 text-gray-300'>{experience.date}</p>
        <ul className='list-disc space-y-2 md:space-y-4 ml-4 md:ml-5 text-md'>
          {experience.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}