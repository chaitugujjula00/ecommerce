import React, { useEffect, useState } from 'react'
import cross_icon from '../Assets/cross_icon.png'
const ListProduct = () => {

  const [allProducts, SetAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{ SetAllProducts(data) });
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    console.log('edfv')
    await fetchInfo();
  }

  return (
    <div className='mx-auto my-10 w-[900px]'>
      <h1 className='text-3xl font-bold'>All Products List</h1>
      <div className='flex justify-between my-6 text-lg font-light'>
        <p className='w-[12.5%]'>Products</p>
        <p className='w-[30%]'>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div>
        <hr className='mb-1' />
        <div className='flex flex-col gap-2'>
        {allProducts.map((product,index)=>{
          return <div key={index} className='flex justify-between my-6 h-20'>
            <div className=' h-20 w-[10%]'><img src={product.image} /></div>
            <p className='w-[30%] text-wrap'>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img className='h-4 mx-6' onClick={()=>{remove_product(product.id)}} src={cross_icon} />
          </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default ListProduct