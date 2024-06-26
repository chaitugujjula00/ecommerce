import React from 'react'
import arrow from './Assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
  const {product} = props;
  return (
    <div className='mx-32 my-8 flex gap-[6px] align-middle py-4 text-[14px] text-gray-500 font-bold'>
      Home <img className='h-[14px] mt-1' src={arrow} alt=''/> Shop <img className='h-[14px] mt-1' src={arrow} alt=''/>{product.category}<img className='h-[14px] mt-1' src={arrow} alt=''/>{product.name}
    </div>
  )
}

export default BreadCrum