import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../Assets/Product_Cart.svg'
import list_product_icon from '../Assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className='flex flex-col gap-6 items-center sticky left-0 w-[250px] border-r border-r-gray-600 bg-gray-50 h-screen py-10'>
        <Link to={'/addproduct'}>
            <div className='flex gap-2 border rounded-lg py-3 px-4 bg-gray-100 transition duration-200 hover:bg-gray-200 hover:cursor-pointer hover:drop-shadow-lg'>
                <img src={add_product_icon} />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'}>
            <div className='flex gap-2 border rounded-lg py-3 px-4 bg-gray-100 transition duration-200 hover:bg-gray-200 hover:cursor-pointer hover:drop-shadow-lg'>
                <img src={list_product_icon} />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar