import React from 'react'
import { useSelector } from 'react-redux'
import Bill from './Bill'
import Cartinfo from './Cartinfo'
import Customerinfo from './Customerinfo'

const Cart = () => {
  const cartItems = useSelector((state) => state.order.cartItems);
  
  return (
    <aside className='bg-[#1a1a1a] rounded-lg p-5 h-full flex flex-col'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[#f5f5f5] text-xl font-bold'>Cart</h2>
        <span className='rounded-lg bg-[#262626] px-3 py-1 text-sm font-semibold text-[#ababab]'>
          {cartItems.length} Items
        </span>
      </div>

      <Customerinfo />
      <Cartinfo />
      <Bill />
    </aside>
  )
}

export default Cart
