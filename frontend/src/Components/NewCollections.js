import React from 'react'
import new_collections from '../Components/Assets/new_collections.js'
import Item from './Item.js'
const NewCollections = () => {
  return (
    <div className='px-40 py-20 flex flex-col items-center'>
        <h1 className='font-bold border-b-4 border-b-black text-4xl pb-2 mb-12'>New Collections</h1>
        <div className='grid grid-cols-4 gap-8 text-wrap'>
            {
                new_collections.map(item=> <Item key={item.id} item={item}/> )
            }
        </div>
    </div>
  )
}

export default NewCollections