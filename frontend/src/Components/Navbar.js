import React, { useContext, useState } from 'react'
import logo from '../Components/Assets/logo.png'
import cart from '../Components/Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
  const [Menu,setMenu] = useState('Shop');
  const {getTotalCartItems} = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false); // State to control the mobile menu
  // const [Menu, setMenu] = useState('Shop'); // Current menu state
  const activeli = 'text-red-500 font-semibold'; // Active link style
  const li = 'text-gray-700 hover:text-black'; // Regular link style
  // const logo = 'your-logo-path'; // Replace with your logo image path
  // const cart = 'your-cart-icon-path'; // Replace with your cart icon path
  return (
      <div className="bg-white border-b-2 border-gray-300 sticky top-0 z-10">
        {/* Desktop and Mobile Navbar */}
        <div className="max-w-screen-xl mx-auto flex justify-around items-center px-4 py-4">
  
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="SHOPY Logo" className="h-8 md:h-10" />
            <span className="font-semibold text-xl md:text-2xl">SHOPY</span>
          </Link>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" onClick={() => setMenu('Shop')}>
              <span className={Menu === 'Shop' ? activeli : li}>Shop</span>
            </Link>
            <Link to="/men" onClick={() => setMenu('Men')}>
              <span className={Menu === 'Men' ? activeli : li}>Men</span>
            </Link>
            <Link to="/women" onClick={() => setMenu('Women')}>
              <span className={Menu === 'Women' ? activeli : li}>Women</span>
            </Link>
            <Link to="/kids" onClick={() => setMenu('Kids')}>
              <span className={Menu === 'Kids' ? activeli : li}>Kids</span>
            </Link>
          </div>
  
          {/* User Actions and Cart */}
          <div className="flex items-center gap-6">
            {localStorage.getItem('auth-token') ? (
              <button
                onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}
                className="px-6 py-2 text-white bg-gray-600 rounded-full transition hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-600"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-6 py-2 text-white bg-gray-600 rounded-full transition hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-600">
                  Login
                </button>
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <img src={cart} alt="Cart" className="h-8" />
              <div className="absolute top-0 right-0 w-6 h-6 flex justify-center items-center text-xs text-white bg-red-500 rounded-full">
                {getTotalCartItems()}
              </div>
            </Link>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-gray-600">
            ☰
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            <Link to="/" onClick={() => { setMenu('Shop'); setIsOpen(false); }} className="block py-2 text-lg">
              Shop
            </Link>
            <Link to="/men" onClick={() => { setMenu('Men'); setIsOpen(false); }} className="block py-2 text-lg">
              Men
            </Link>
            <Link to="/women" onClick={() => { setMenu('Women'); setIsOpen(false); }} className="block py-2 text-lg">
              Women
            </Link>
            <Link to="/kids" onClick={() => { setMenu('Kids'); setIsOpen(false); }} className="block py-2 text-lg">
              Kids
            </Link>
          </div>
        )}
      </div>  

  )
}

export default Navbar