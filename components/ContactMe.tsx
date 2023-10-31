'use client'
import React from 'react'
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';


type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }
type Props = {}

export default function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = "mailto:cedric.productmanager@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}"
    }
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full md:max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center'>
  <h3 className='md:my-8 absolute top-14 md:top-24 uppercase tracking-[0.35em] text-gray-500 text-2xl'>
    Contact
  </h3>

  <div>
    <div className='flex flex-col space-y-10'>
      <h4 className='text-2xl md:text-4xl font-semibold text-center'>
        <span className='text-2xl underline decoration-[#8b9d63]/50'>Let&apos;s have a talk</span>
      </h4>

      <div className='space-y-10'>
        <div className='flex items-center justify-center space-x-2 md:space-x-5'>
          <PhoneIcon className='text-[#8b9d63] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
          <Link href='tel:+14387381828' className='text-lg md:text-2xl'>+1438-7381828 </Link>
        </div>

        <div className='flex items-center justify-center space-x-2 md:space-x-5'>
          <EnvelopeIcon className='text-[#8b9d63] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
          <Link href='mailto:cedric.productmanager@gmail.com?subject=Hi from your website' className='text-lg md:text-2xl'>cedric.productmanager@gmail.com</Link>
        </div>
      </div>
      {/* Your form code can be inserted here if needed */}
    </div>
  </div>
</div>
  )
}