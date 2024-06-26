import React from 'react'

const Description = () => {
  return (
    <div className='mx-32 my-8 p-4'>
        <div className='flex font-semibold'>
            <div className='border-t border-l border-gray-400 px-6 py-4 transition duration-200 hover:bg-gray-100 hover:cursor-pointer'>Description</div>
            <div className='border-x border-t border-gray-400 px-6 py-4 transition duration-200 hover:bg-gray-100 hover:cursor-pointer'>Reviews(122)</div>
        </div>
        <div className='flex flex-col gap-4 border border-gray-600 py-10 px-16'>
            <p className='w-full text-wrap'>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlore
                mloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlor
                emlorem</p>
            <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlor
                emloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
        </div>
    </div>
  )
}

export default Description