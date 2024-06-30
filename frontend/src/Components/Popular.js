import React, { useEffect, useState } from 'react'
import Item from './Item';

const Popular = () => {
  const [data_product,setData_product] = useState();
  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((res)=>res.json())
    .then((data)=>setData_product(data));
  },[])
  return (
    <div className='px-40 py-20 flex flex-col items-center'>
        <h1 className='font-bold border-b-4 border-b-black text-4xl pb-2 mb-12'>Popular In Women</h1>
        <div className='grid grid-cols-4 gap-8 text-wrap'>
            {
                data_product.map(item=> <Item key={item.id} item={item}/> )
            }
        </div>
    </div>
  )
}

export default Popular