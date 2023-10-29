'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div 
      initial={{ opacity:0}}
      transition ={{ duration:1.5}}
      whileInView={{ opacity:1}}
    className='h-screen flex relative flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8b9d63]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{
                y: -300,
                opacity:0
              }}
              transition ={{ duration: 1.2}}
              whileInView={{ opacity:1, y:0}}
              viewport={{ once:true}}
            src="https://fact24.f24.com/wp-content/uploads/2020/08/Fact24-ENS_Start-Screen.png-1024x617.png" alt="" className='h-40'/>
            <div>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#8b9d63]/50'>Case Study {i + 1} of {projects.length}: 
                </span>{" "}
              </h4>
            <br></br>
              <p className='text-lg text-center md:text-left'>zefopzeofk zeopfkzekfzepokfzoei fjzejfzejfzheu ihzue hfze hfzeu hfzeui hfz hfzu ehf zuehfu hzueh fu ehfzu hfjsdfh sidf siduf hsdfh usdfhiusd fhsdhfusdhf usdhf uisdhfu sdh fuh ds</p>
            </div>
          </div>
        ))}
      </div>

    <div className='w-full absolute top-[40%] bg-[#8b9d63]/30 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}