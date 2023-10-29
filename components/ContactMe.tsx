'use client'
import React from 'react'
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { useForm, SubmitHandler } from 'react-hook-form';


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
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[0.35em] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#8b9d63]/50'>Let's have a {" "}talk</span>
                </h4>
            
                <div className='space-y-10'>
                    <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='text-[#8b9d63] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+1438-7381828</p>
                    </div>
                    
                    <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-[#8b9d63] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>cedric.productmanager@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className='flex space-x-2'>
                        <input className='contactInput' placeholder="Name" type="text" {...register("name", { required: true })}/>
                        {errors.name && <span>This field is required</span>}
                        <input className='contactInput' placeholder="Email" type="email" {...register("email", { required: true })}/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <input className='contactInput' placeholder="Subject" type="text" {...register("subject", { required: true })}/>
                        {errors.subject && <span>This field is required</span>}
                    <textarea className='contactInput' placeholder='Message' {...register("message", { required: true })}/>
                    {errors.message && <span>This field is required</span>}

                    <button type='submit' className='bg-[#8b9d63] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}