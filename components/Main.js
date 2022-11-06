import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'

export default function Main() {
  return (
<div className='w-full h-screen text-center' style={{zIndex:"-5"}}>
    <div className='max-w-[1240px] h-full w-full mx-auto p-2 flex  justify-center items-center'>
        <div>
            <p className='uppercase tracking-widesttext-gray-200 font-semibold'>
                  Eat Sleep coffee code repeat
            </p>
            <h1 className='py-4 text-gray-600 text-3xl'>Hiya,I Am <span className='text-purple-700 font-bold'>Anubhav</span></h1>
            <h1 className='text-gray-700 uppercase tracking-widest font-bold lg:text-4xl md:text-3xl sm:text-2xl'>--I Am A Full Stack Web Developer--</h1>
            <p className='mx-auto my-2 py-2 max-w-[70%]'>Hello Guys This Anubhav ,A Full Stack Web Developer Familiar With Technologies such as ReactJs,Next,Django,ExpressJs,MongoDB ans so on.Apart From That I Am an Enthusiast Of Data Science and Devops.</p>
        
            <div className='flex items-center  justify-between max-w-[333px] mx-auto p-4'>
            <div className='rounded-full  p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillFacebook/></div>
                <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillLinkedin/></div>                   
                 <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillGithub/></div>
                 <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillMail/></div>
                </div>
        
        </div>
       
    </div>
</div>
  )
}
