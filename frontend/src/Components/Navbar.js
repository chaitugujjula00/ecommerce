import React, { useContext, useState } from 'react'
import logo from '../Components/Assets/logo.png'
import cart from '../Components/Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
  const [Menu,setMenu] = useState('Shop');
  const {getTotalCartItems} = useContext(ShopContext);
  const li='transition duration-200 hover:cursor-pointer hover:text-gray-600 hover:border-b-2 hover:pb-2 hover:border-b-red-400';
  const activeli='transition duration-200 hover:cursor-pointer border-b-2 pb-2 hover:text-gray-800 border-yellow-500';
  return (
    <div className='flex justify-around py-2 border-b-2 border-b-black bg-white hover:drop-shadow-lg sticky top-0 z-10'>
        <Link to='/'>
        <div className='flex gap-4 items-center hover:cursor-pointer'>
          <img src={logo} alt='' />
          <p className='font-semibold text-2xl '>SHOPY</p>
        </div>
        </Link>

        <div className='flex items-center'>
          <ul className='flex gap-8 items-center text-lg '>
            <Link to='/'><li className={Menu==='Shop'?activeli:li} onClick={()=>{setMenu('Shop')}}>Shop</li></Link>
            <Link to='/men'><li className={Menu==='Men'?activeli:li} onClick={()=>{setMenu('Men')}}>Men</li></Link>
            <Link to='/women'><li className={Menu==='Women'?activeli:li} onClick={()=>{setMenu('Women')}}>Women</li></Link>
            <Link to='/kids'><li className={Menu==='Kids'?activeli:li} onClick={()=>{setMenu('Kids')}}>Kids</li></Link>
          </ul>
        </div>

        <div className='flex items-center gap-8'>
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className="px-8 py-2 rounded-2xl bg-gray-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-600">
            Logout
          </button>
          :<Link to='/login'><button className="px-8 py-2 rounded-2xl bg-gray-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-600">
          Login
        </button></Link>}
        
          <Link to='/cart'><img src={cart} alt='' /></Link>
          <div className='w-6 h-6 flex justify-center items-center mt-[-25px] ml-[-45px] rounded-full text-sm text-white bg-red-500'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar