import React, { useEffect, useState } from 'react'
import cross_icon from '../Assets/cross_icon.png'
const ListProduct = () => {

  const [allProducts, SetAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('https://ecommerce-8dzq.onrender.com/allproducts')
    .then((res)=>res.json())
    .then((data)=>{ SetAllProducts(data) });
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id) => {
    await fetch('https://ecommerce-8dzq.onrender.com/removeproduct',{
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
    <div className="mx-auto mt-10 px-4 w-full max-w-[900px]">
  <h1 className="text-2xl font-bold text-center mb-6">All Products List</h1>
  <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_repeat(3,minmax(0,1fr))_auto] bg-gray-100 p-4 rounded-lg text-sm font-medium text-gray-600">
    <p>Product</p>
    <p>Title</p>
    <p>Old Price</p>
    <p>New Price</p>
    <p>Category</p>
    <p>Action</p>
  </div>
  <div className="flex flex-col gap-4 mt-4">
    {allProducts.map((product, index) => (
      <div
        key={index}
        className="grid sm:grid-cols-[1fr_2fr_repeat(3,minmax(0,1fr))_auto] items-center gap-4 p-4 bg-white rounded-lg shadow-md"
      >
        <div className="h-16 w-16 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded-md border"
          />
        </div>
        <p className="text-sm font-medium text-gray-700 sm:truncate">
          {product.name}
        </p>
        <p className="text-sm text-gray-600">${product.old_price}</p>
        <p className="text-sm text-gray-600">${product.new_price}</p>
        <p className="text-sm text-gray-600">{product.category}</p>
        <button
          onClick={() => remove_product(product.id)}
          className="text-purple-600 hover:text-purple-800"
        >
          ✖
        </button>
      </div>
    ))}
  </div>
</div>


  )
}

export default ListProduct