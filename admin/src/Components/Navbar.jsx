import React from 'react'
import navlogo from '../Assets/nav-logo.svg'
import navProfile from '../Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 h-20 px-16 border-b-2 border-b-gray-600'>
      <img src={navlogo} />
      <img src={navProfile} />
    </div>
  )
}

export default Navbar