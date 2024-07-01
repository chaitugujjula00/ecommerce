import React from 'react'
import arrow from '../Components/Assets/arrow.png'
import hand_icon from '../Components/Assets/hand_icon.png'
import hero_image from '../Components/Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='flex justify-around items-center h-[90vh] bg-gradient-to-b from-[#ffe2e2] to-white'>
        <div className='text-wrap flex flex-col gap-4'>
            <p className='text-[26px] font-bold'>NEW ARRIVALS ONLY</p>
            <div className='text-[64px] text-wrap font-semibold flex flex-col items-start'>
                <img className='h-16' src={hand_icon} alt=''/>
                <p>new collections</p>
                <p>for urself</p>
            </div>
            <button className='w-60 flex items-center align-middle gap-4 rounded-full bg-red-500 px-8 py-4 transition-all duration-300 hover:gap-9'>Latest collection <img src={arrow} alt=''/></button>
        </div>

        <div >
            <img className=' h-[600px] w-auto transition duration-200 hover:scale-110' src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero