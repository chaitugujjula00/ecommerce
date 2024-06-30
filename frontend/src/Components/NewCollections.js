import React, { useEffect, useState } from 'react'
import Item from './Item.js'
import { useSearchParams } from 'react-router-dom'

const NewCollections = () => {
  const [new_collections,setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((res)=>res.json())
    .then((data)=>setNew_collections(data));
  },[])
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