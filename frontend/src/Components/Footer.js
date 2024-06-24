import React from 'react'
import logo_big from '../Components/Assets/logo_big.png'
import instagram_icon from '../Components/Assets/instagram_icon.png'
import whatsapp_icon from '../Components/Assets/whatsapp_icon.png'
import pintester_icon from '../Components/Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='flex flex-col gap-2 items-center mb-8'>
        <div className='flex gap-4 align-middle items-center'>
            <img className='h-20' src={logo_big} alt=''/>
            <div className='text-4xl font-bold'>SHOPY</div>
        </div>
        <ul className='flex gap-4 text-gray-800 text-lg'>
            <li className='hover:cursor-pointer hover:text-gray-500'>Company</li>
            <li className='hover:cursor-pointer hover:text-gray-500'>Products</li>
            <li className='hover:cursor-pointer hover:text-gray-500'>Offices</li>
            <li className='hover:cursor-pointer hover:text-gray-500'>About</li>
            <li className='hover:cursor-pointer hover:text-gray-500'>Contact</li>
        </ul>
        <div className='flex gap-8'>
            <img src={instagram_icon} alt=''/>
            <img src={whatsapp_icon} alt=''/>
            <img src={pintester_icon} alt=''/>
        </div>
    </div>
  )
}

export default Footer