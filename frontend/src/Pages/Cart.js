import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import cart_cross_icon from '../Components/Assets/cart_cross_icon.png'
const Cart = () => {
  const {getTotalCost, all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='mx-40 mt-40'>
      <div>
        <div className='text-lg font-bold justify-between flex'>
          <p className='w-[10%]'>Products</p>
          <p className='w-[30%]'>Title</p>
          <p className='w-[12.5%]'>Price</p>
          <p className='w-[12.5%]'>Quantity</p>
          <p className='w-[12.5%]'>Total</p>
          <p className='w-[12.5%]'>Remove</p>
        </div>
        <hr className='h-[3px] my-4 bg-gray-400'/>
        {all_product.map(item => cartItems[item.id]>0 ? 
        <div>
          <div className='flex justify-between items-center'>
            <div className='w-[10%]'><img className='h-16' src={item.image} alt='img'/></div>
            <p className='w-[30%]'>{item.name}</p>
            <p className='w-[12.5%]'>${item.new_price}</p>
            <p className='w-[12.5%]'>{cartItems[item.id]}</p>
            <p className='w-[12.5%]'>${cartItems[item.id]*item.new_price}</p>
            <button className='w-[12.5%] px-6 hover:cursor-pointer' onClick={()=>{removeFromCart(item.id)}}><img  src={cart_cross_icon}/></button>
          </div>
          <hr className='h-[3px] my-4 bg-gray-400'/>
        </div>
          : null
        )}
      </div>

      <div className='my-20 flex justify-between'>
        <div className='flex flex-col gap-4 w-[40%] font-light'>
          <h1 className='text-3xl font-bold'>Cart Totals</h1>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>${getTotalCost()}</p>
          </div>
          <hr className='h-[3px] bg-gray-400'/>
          <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className='h-[3px] bg-gray-400'/>
          <div className='flex justify-between text-xl font-bold'>
            <p>Total</p>
            <p>${getTotalCost()}</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 items-start w-[50%]'>
          <p>If you have a promo code, Enter it here</p>
          <div class="flex gap-0 rounded-full">
            <input class="rounded-l-full pl-8 w-[400px] py-2 border bg-gray-100 border-black" type="code" placeholder="PROMO CODE"/>
            <button class="rounded-full bg-[#4d4d4d] text-white border-2 border-[#4d4d4d] px-8 py-4 ml-[-70px] transition duration-200 hover:bg-white hover:text-[#4d4d4d] hover:drop-shadow">Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart