'use client'
import React from 'react'
import { motion } from 'framer-motion';
import projectsData from './projectsData';

type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0}}
      transition ={{ duration:1.5}}
      whileInView={{ opacity:1}}
    className='h-screen flex relative flex-col overflow-hidden text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='md:my-8 absolute top-14 md:top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffbd59]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projectsData.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen w-full md:w-screen  p-8 md:p-20 h-screen'>
            <motion.img 
              initial={{
                y: -300,
                opacity:0
              }}
              transition ={{ duration: 1.2}}
              whileInView={{ opacity:1, y:0}}
              viewport={{ once:true}}
            src={project.imageUrl} alt={`Project ${i + 1}`}
            className='h-40'/>
            <div>
              <h4 className='text-xl md:text-2xl font-semibold text-center'>
                <span className='text-sm underline decoration-[#ffbd59]/50'>{i + 1} of {projectsData.length}  
                <br></br>
                </span > {project.title}
              </h4>
            <div className='flex flex-row items-center justify-center space-x-2 my-2'>
              {project.techs.map((tech, index) => (
                <img
                key={index}
                className='flex scale-75 h-8 w-8 md:h-10 md:w-10'
                src={tech} 
                alt={tech}
                />
                ))}
            </div>
              <p className='text-sm md:text-lg text-center md:text-left'>{project.description}</p>
                <br></br>
              <a className='text-sm md:text-lg underline decoration-[#ffbd59]/50 text-center uppercase md:text-left animate-pulse' href={project.projectUrl} target="_blank">&#10132; See the Project</a>
            </div>
          </div>
        ))}
      </div>

    <div className='w-full md:w-screen absolute top-[40%] bg-[#ffbd59]/30 left-0 h-[500px] md:h-[600px] -skew-y-12'></div>
    </motion.div>
  )
}