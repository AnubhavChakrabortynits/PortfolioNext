import React,{useState} from 'react'
import Link from 'next/link'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'

export default function Navbar() {
const [nav,setNav]=useState(false)


const handleNav=()=>{
    setNav(!nav)
}


  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='w-full h-full flex justify-between items-center px-2 2xl:px-16 '>
<img src='https://tse4.mm.bing.net/th?id=OIP.EvmUmoFabPGr9GTlzFb8KQAAAA&pid=Api&P=0' style={{width:"110px",height:"100%"}}/>

<div>
        <ul className='hidden md:flex'>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold '>Home</li>
        </Link>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold'>About</li>
        </Link>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold '>Skills</li>
        </Link>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold'>Projects</li>
        </Link>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold'>Contact</li>
        </Link>
        <Link href={'/'}>
            <li className='ml-10 text-sm uppercase hover:border-0 font-bold'>Blogs</li>
        </Link>

        </ul>

        <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
        </div>
        </div>
        </div>
        
        <div className={nav==true ?"md:hidden fixed top-0 left-0 w-full h-screen bg-black/60":""}>
            <div className={nav==true?"fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#ecf0f3]":"fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500 bg-[#ecf0f3]"}>
                <div>
                    <div className='flex justify-between items-center '>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.EvmUmoFabPGr9GTlzFb8KQAAAA&pid=Api&P=0" style={{width:"120px",height:"75px"}} />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineCloseCircle size={25} />
                        </div>
                    </div>
                    <div className='my-4 border-b border-gray-300'>
                            <p className='font-bold'>
                                Eat Sleep Coffee Code Repeat
                            </p>
                        </div>

                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase font-bold text-sm'>
                                <Link href={'/'}><li className='py-4'>Home</li></Link>
                                <Link href={'/'}><li className='py-4'>About</li></Link>
                                <Link href={'/'}><li className='py-4'>Skills</li></Link>
                                <Link href={'/'}><li className='py-4'>Projects</li></Link>
                                <Link href={'/'}><li className='py-4'>Contact</li></Link>
                                <Link href={'/'}><li className='py-4'>Blogs</li></Link>
                            </ul>

                            <div className='pt-40'>
                                <p className='uppercase font-bold tracking-widest text-purple-700'>Connect With Me</p>
                               <div className='my-4 flex justify-between'>
                                <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillLinkedin/></div>
                                <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillFacebook/></div>
                                <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillGithub/></div>
                                <div className='rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-3'><AiFillMail/></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
