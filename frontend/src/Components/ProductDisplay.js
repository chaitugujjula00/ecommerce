import React from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='mx-32 my-8 flex gap-20 mt-12'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4 w-[100px]'>
                <img className='rounded-lg transition duration-200 hover:drop-shadow-md hover:scale-105 hover:cursor-pointer' src={product.image} alt=''/>
                <img className='rounded-lg transition duration-200 hover:drop-shadow-md hover:scale-105 hover:cursor-pointer' src={product.image} alt=''/>
                <img className='rounded-lg transition duration-200 hover:drop-shadow-md hover:scale-105 hover:cursor-pointer' src={product.image} alt=''/>
                <img className='rounded-lg transition duration-200 hover:drop-shadow-md hover:scale-105 hover:cursor-pointer' src={product.image} alt=''/>
            </div>
            <div className='w-[440px]'>
                <img className='w-full h-auto' src={product.image} alt='' />
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{product.name}</h1>
            <div className='flex items-center gap-1 h-4'>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className='flex gap-6 text-xl font-bold'>
                <div className='line-through text-gray-400'>${product.old_price}</div>
                <div className='text-red-600'>${product.new_price}</div>
            </div>

            <div>
                lorem
            </div>
            <div>
                <h1>Select Size</h1>
                <div className='flex gap-2 '>
                    <div className='border border-black rounded-sm text-md font-semibold pl-4 py-2 w-10 transition duration-200 hover:bg-gray-200 hover:cursor-pointer'>S</div>
                    <div className='border border-black rounded-sm text-md font-semibold pl-3 py-2 w-10 transition duration-200 hover:bg-gray-200 hover:cursor-pointer'>M</div>
                    <div className='border border-black rounded-sm text-md font-semibold pl-4 py-2 w-10 transition duration-200 hover:bg-gray-200 hover:cursor-pointer'>L</div>
                    <div className='border border-black rounded-sm text-md font-semibold pl-3 py-2 w-10 transition duration-200 hover:bg-gray-200 hover:cursor-pointer'>XL</div>
                    <div className='border border-black rounded-sm text-md font-semibold pl-[6px] py-2 w-10 transition duration-200 hover:bg-gray-200 hover:cursor-pointer'>XXL</div>
                </div>
            </div>
            <button className='w-48 rounded-2xl bg-red-500 border-2 border-red-500 px-4 py-2 transition-all duration-300 hover:bg-white hover:text-red-500 hover:drop-shadow-lg hover:scale-[1.01]'>Add to Cart</button>
            <p className='text-gray-500'><span className='font-bold text-black mr-2'>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='text-gray-500'><span className='font-bold text-black mr-2'>Tags :</span>Modren, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay