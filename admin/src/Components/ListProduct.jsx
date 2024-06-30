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
    <div>
      <h1>All Products List</h1>
      <div>
        <p>Products</p>
        <p>title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div>
        <hr />
        {allProducts.map((product,index)=>{
          return <div key={index}>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct