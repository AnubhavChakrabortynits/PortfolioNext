import React from 'react'


export default function Contact() {
  return (
    <div className='md:w-[90%] w-[95%] lg:pt-[550px] pt-16 mb-2 mx-auto' >
      <div className=' max-w-[1240px] mx-auto px-2'>
      <p className='uppercase font-semibold text-purple-700 text-xl tracking-widest'>Lets Connect</p>
        <p className='text-2xl font-bold text-gray-600 tracking-widest uppercase py-4'>My Contact Infos</p>

        <div className='grid md:grid-cols-5 gap-8 '>
        <div className='flex col-span-2 flex-col items-center justify-center shadow-lg shadow-gray-500'>
        <img className='shadow-lg shadow-gray-500 mx-auto rounded-full w-[85%]   ' src='http://st2.depositphotos.com/1104517/11965/v/450/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg' />
        <div className='flex my-2 flex-col items-center justify-center'>
            <p className='font-bold text-gray-900'>Name: Anubhav Chakraborty</p>
            <p className='font-bold text-gray-900'>Email: chakrabortyanubhav0@gmail.com</p>
            <p className='font-bold text-gray-900'>Name: Anubhav Chakraborty</p>
        </div>
        </div>

        <div className='col-span-3 shadow-lg shadow-gray-500'>
        <div className=' w-[75%] mx-auto '>
        <form>
                  <div class="mb-6 mx-6 rounded-xl pt-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        class="
                        w-full
                        border-2 border-gray-500
                        rounded
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        font-semibold
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        hover:shadow-lg
                        
                        hover:shadow-gray-500
                        hover:border-none
                        "
                        />
                  </div>
                  <div class="mb-6 mx-6 rounded-xl">
                     <input
                        type="email"
                        placeholder="Your Email"
                        class="
                        w-full
                        border-2 border-gray-500
                        rounded
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        font-semibold
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        hover:shadow-lg
                        
                        hover:shadow-gray-500
                        hover:border-none
                        "
                        />
                  </div>
                  <div class="mb-6 mx-6 rounded-xl">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        class="
                        w-full
                        border-2 border-gray-500
                        rounded
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        font-semibold
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        hover:shadow-lg
                        
                        hover:shadow-gray-500
                        hover:border-none
                        "
                        />
                  </div>
                  <div class="mb-6 mx-6 rounded-xl">
                     <textarea
                        rows="6"
                        placeholder="Your Message"
                        class="
                        w-full
                        border-2 border-gray-500
                        rounded
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        font-semibold
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        hover:shadow-lg
                        
                        hover:shadow-gray-500
                        hover:border-none
                        "
                        ></textarea>
                  </div>
                  <div className='flex justify-between'>
                     <button
                        type="submit"
                     className='bg-red-400 w-[50%] hover:animate-pulse mb-2 text-zinc-50 mx-auto rounded-2xl p-2 font-bold'>
                     Send Message
                     </button>
                  </div>
               </form>
               </div>
        </div>

        </div>
      </div>
    </div>
  )
}
