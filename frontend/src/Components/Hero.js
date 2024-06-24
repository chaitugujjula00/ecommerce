import React from 'react'
import arrow from '../Components/Assets/arrow.png'
import hand_icon from '../Components/Assets/hand_icon.png'
import hero_image from '../Components/Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='flex justify-around items-center h-[90vh] bg-gradient-to-b from-rose-300 to-white'>
        <div className='w-[500px] text-wrap flex flex-col gap-6 p-4'>
            <p className='text-[32px] font-bold'>NEW ARRIVALS ONLY</p>
            <div className='text-[72px] text-wrap font-semibold flex flex-col items-start'>
                <img className='h-16' src={hand_icon} alt=''/>
                <p>new collections for urself</p>
            </div>
            <button className='w-56 flex items-center align-middle gap-4 rounded-full bg-red-500 px-8 py-4'>Latest collection <img src={arrow}/></button>
        </div>

        <div className='h-[600px]'>
            <img className='h-[600px]' src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero