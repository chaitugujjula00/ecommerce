import React from 'react'

const Item = (props) => {
    const item = props.item;
  return (
    <div className='flex flex-col gap-2'>
        <img className='rounded-2xl hover:cursor-pointer transition duration-200 hover:drop-shadow-2xl hover:scale-105' src={item.image} alt='image' />
        <p className='text-lg font-medium'>{item.name}</p>
        <div className='flex gap-4'>
            <div className='font-bold'>${item.new_price}</div>
            <div className='font-light line-through'>${item.old_price}</div>
        </div>
    </div>
  )
}

export default Item