import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col gap-3 align-middle items-center h-[35vh] bg-gradient-to-b from-rose-300 to-white mx-40 py-8 mb-40 rounded-3xl'>
            <div className='text-[52px] text-wrap font-semibold'>
                Get Exclusive Offers on Your Email
            </div>
            <div className='text-[26px] font-bold'>Subscribe to our news Letter</div>
            <div className='flex gap-0 rounded-full'>
                <input className='rounded-l-full pl-8 w-[400px] py-2 border border-gray-500' type='email' placeholder='email'></input>
                <button className='rounded-full bg-red-500 hover:bg-white border-2 border-red-500 px-8 py-4 ml-[-70px]'>Subscribe</button>
            </div>
    </div>
  )
}

export default NewsLetter