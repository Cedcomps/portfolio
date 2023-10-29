import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity:0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity:1,
        borderRadius: ["20%","20%","50%","80%","20%",]
    }}
    transition={{
        duration:2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-lime-900 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='rounded-full border border-neutral-800 rounded-full h-[300px] w-[300px] mt-52 absolute' />
        <div className='rounded-full border border-neutral-800 rounded-full h-[500px] w-[500px] mt-52 absolute' />
        <div className='rounded-full border border-lime-950 rounded-full h-[650px] w-[650px] mt-52 animate-pulse absolute opacity-20' />
        <div className='rounded-full border border-neutral-800 rounded-full h-[800px] w-[800px] mt-52 absolute' />
        <div className='absolute border border-lime-950 rounded-full h-[500px] w-[500px] mt-52 animate-ping opacity-100' />
    </motion.div>
  )
}