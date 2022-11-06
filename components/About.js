import React from 'react'

export default function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
                <p className='text-xl  uppercase font-semibold text-purple-700 tracking-widest'>About Me</p>
                <h2 className='text-3xl py-3 font-bold tracking-widest text-gray-600'>Who Am I?</h2>
                <p className='text-xl text-gray-800 font-semibold py-4'>I Guess My Portfolio Will Say It All..</p>
                <p className='text-sm text-gray-500 font-semibold py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt, architecto officia atque distinctio sint! Accusantium deleniti odit a vitae facere voluptatum repudiandae provident, deserunt neque sed consectetur facilis ea exercitationem eaque hic.</p>
                <p className='text-sm text-gray-500 font-semibold py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quaerat voluptates sapiente, architecto ducimus amet. Quis expedita blanditiis, temporibus dolorum iure minima nesciunt repellat, corrupti facilis, ea voluptates. Aspernatur veniam quas, inventore placeat neque impedit?</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-between hover:scale-105 ease-in duration-500 p-4 '>
                <img className='rounded-xl' src="https://freerangestock.com/sample/124870/coffee-and-laptop.jpg"/>
            </div>
        </div>
    </div>
  )
}
