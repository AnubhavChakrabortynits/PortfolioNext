import React from 'react'
import noteimg from '../images/inotebook.png'
import weatherapp from '../images/weatherapp.png'
import imggallery from '../images/imggallery.png'
import recipe from '../images/recipe.png'
import Image from 'next/image'
import Link from 'next/link'
import {AiFillGithub} from 'react-icons/ai'
import {SiYoutube} from 'react-icons/si'
export default function Projects() {
  return (
    <div className='w-full '>
    <div className='lg:h-screen max-w-[1240px] mx-auto py-16 px-2'>
        <p className='uppercase font-semibold text-purple-700 text-xl tracking-widest'>Projects</p>
        <p className='text-2xl font-bold text-gray-600 tracking-widest uppercase py-4'>Some Of My Notable Works</p>
       
      <div className='grid md:grid-cols-2 gap-8'>
        <div className="relative shadow-lg shadow-gray-600 flex justify-center group items-center h-auto w-full rounded-xl p-4 hover:bg-gradient-to-r from-gray-700 to-gray-400 ">
        <Image className='rounded-xl h-[320px] group-hover:opacity-20' src={noteimg} />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold tacking-wide text-center text-gray-50'>iNOTEBOOK</h3>
          <p className='pt-2 pb-4 text-gray-50 font-semibold'>React Js/Django</p>
        
          <Link href='/'>
            <p className='text-center rounded-xl py-3 bg-gray-900 text-gray-50 cursor-pointer font-bold hover:animate-pulse'>Visit Site</p>
          </Link>
          <div className='flex justify-between items-center'>
          <Link href={'/'}><AiFillGithub className='text-5xl mx-auto bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          <Link href={'/'}><SiYoutube className='text-5xl bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          </div>
        </div>
        </div>
        <div className="relative shadow-lg shadow-gray-600 flex justify-center group items-center h-auto w-full rounded-xl p-4 hover:bg-gradient-to-r from-gray-700 to-gray-400">
        <Image className='rounded-xl h-[320px] group-hover:opacity-20' src={weatherapp} />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold tacking-wide text-center text-gray-50'>WEATHER WEB </h3>
          <p className='pt-2 pb-4 text-gray-50 font-semibold text-center'>React Js</p>
        
          <Link href='/'>
            <p className='text-center rounded-xl py-3 bg-gray-900 text-gray-50 cursor-pointer font-bold hover:animate-pulse'>Visit Site</p>
          </Link>
          
          <div className='flex justify-between items-center'>
          <Link href={'/'}><AiFillGithub className='text-5xl mx-auto bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          <Link href={'/'}><SiYoutube className='text-5xl bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          </div>
        </div>
        </div>
        <div className="relative shadow-lg shadow-gray-600 flex justify-center group items-center h-auto w-full rounded-xl p-4 hover:bg-gradient-to-r from-gray-700 to-gray-400">
        <Image className='rounded-xl h-[320px] group-hover:opacity-20' src={imggallery} />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold tacking-wide text-center text-gray-50'>Image Gallery</h3>
          <p className='pt-2 pb-4 text-gray-50 font-semibold text-center'>Django/Bootstrap</p>
        
          <Link href='/'>
            <p className='text-center rounded-xl py-3 bg-gray-900 text-gray-50 cursor-pointer font-bold hover:animate-pulse'>Visit Site</p>
          </Link>
          
          <div className='flex justify-between items-center'>
          <Link href={'/'}><AiFillGithub className='text-5xl mx-auto bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          <Link href={'/'}><SiYoutube className='text-5xl bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          </div>
        </div>
        </div>
        <div className="relative shadow-lg shadow-gray-600 flex justify-center group items-center h-auto w-full rounded-xl p-4 hover:bg-gradient-to-r from-gray-700 to-gray-400">
        <Image className='rounded-xl h-[320px] group-hover:opacity-20' src={recipe} />
        <div className='hidden max-w-[200px] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold tacking-wide text-center text-gray-50 uppercase'>Recipe Search Webapp</h3>
          <p className='pt-2 pb-4 text-gray-50 font-semibold text-center'>React Js/Bootstrap</p>
        
          <Link href='/'>
            <p className='text-center rounded-xl py-3 bg-gray-900 text-gray-50 cursor-pointer font-bold hover:animate-pulse'>Visit Site</p>
          </Link>
          
          <div className='flex justify-between items-center'>
          <Link href={'/'}><AiFillGithub className='text-5xl mx-auto bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          <Link href={'/'}><SiYoutube className='text-5xl bg-gray-700 rounded-full text-zinc-50 my-2 hover:animate-spin' /></Link>
          </div>
        </div>
        </div>
      </div>

        </div>
    </div>
  )
}
