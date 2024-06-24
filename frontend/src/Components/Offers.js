import React from 'react'
import exclusive_image from '../Components/Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='flex justify-around items-center h-[50vh] bg-gradient-to-b from-[#ffe2e2] to-white mt-20 mx-32 rounded-3xl'>
        <div className='text-wrap flex flex-col gap-4'>
            <div className='text-[64px] text-wrap font-semibold flex flex-col items-start'>
                <p>Exclusive Offers</p>
                <p>for You</p>
            </div>
            <p>ONLY FOR BEST SELLER PRODUCTS</p>
            <button className='w-56 px-auto gap-4 rounded-full bg-red-500 px-8 py-4 border-2 border-red-500 transition duration-200 hover:scale-110 hover:bg-white hover:drop-shadow-xl'>CHECK NOW</button>
        </div>

        <div >
            <img className=' h-[400px] w-auto transition duration-200 hover:scale-110' src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}

export default Offers