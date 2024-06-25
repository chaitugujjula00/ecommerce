import React from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='flex gap-20 mt-12'>
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
            <div className='flex gap-8 text-xl font-bold'>
                <div className='line-through text-gray-400'>${product.old_price}</div>
                <div className='text-red-600'>${product.new_price}</div>
            </div>

            <div>
                lorem
            </div>
            <div>
                <h1>Select Size</h1>
                <div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add to Cart</button>
            <p><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p><span>Tags :</span>Modren, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay