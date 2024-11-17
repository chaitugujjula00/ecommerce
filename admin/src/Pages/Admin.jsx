import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import navlogo from '../Assets/nav-logo.svg'
import navProfile from '../Assets/nav-profile.svg'
import { Link } from 'react-router-dom'
import add_product_icon from '../Assets/Product_Cart.svg'
import list_product_icon from '../Assets/Product_list_icon.svg'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'
const Admin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex justify-normal h-full'>
      
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-gray-50 border-r border-gray-600 py-10 transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Button for Sidebar */}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-600 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 items-center">
          <Link to={'/addproduct'}>
            <div className="flex gap-2 border rounded-lg py-3 px-4 bg-gray-100 transition duration-200 hover:bg-gray-200 cursor-pointer hover:drop-shadow-lg">
              <img src={add_product_icon} alt="Add Product" />
              <p>Add Product</p>
            </div>
          </Link>
          <Link to={'/listproduct'}>
            <div className="flex gap-2 border rounded-lg py-3 px-4 bg-gray-100 transition duration-200 hover:bg-gray-200 cursor-pointer hover:drop-shadow-lg">
              <img src={list_product_icon} alt="Product List" />
              <p>Product List</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <div className="flex justify-between items-center py-4 h-20 px-4 sm:px-8 md:px-16 border-b-2 border-gray-600 bg-white">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <img src={navlogo} alt="Logo" className="h-10 px-0 md:px-56" />
          <img src={navProfile} alt="Profile" className="h-10" />
        </div>

        {/* Content */}
        <div className="p-4 md:ml-[250px]">
          <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
        </div>
      </div>
            
    </div>
  )
}

export default Admin