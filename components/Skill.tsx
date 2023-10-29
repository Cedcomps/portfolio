import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft ? -200 : 200,
            opacity:0,
        }}
        transition ={{ duration:1}}
        whileInView={{ opacity:1, x:0}}
        src='https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Azure-SQL-Database-Monitoring.component.complex-narrative-xl.ts=1692275024860.png/content/adobe-cms/fr/fr/products/instana/supported-technologies/azure-sql-database-monitoring/jcr:content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center h-full justify-center'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}