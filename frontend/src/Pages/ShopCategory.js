import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='px-40 my-20'>
      <img className='mb-10' src={props.banner} alt=''/>
      <div className='flex justify-between mb-4'>
        <p>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='text-sm flex items-center gap-1 border-2 border-gray-300 px-4 py-2 rounded-full transition duration-200 hover:bg-gray-300 hover:cursor-pointer'>
          Sort by <img className='h-2' src={dropdown_icon} alt=''/>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8'>
        {all_product.map(item=>(
          props.category===item.category ? <Item item={item}/> :null
        ))}
      </div>

    </div>
  )
}

export default ShopCategory