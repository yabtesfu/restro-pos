import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/orderSlice'

const Bill = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.cartItems);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.15);
  const total = subtotal + tax;

  return (
    <div className='mt-5 border-t border-[#343434] pt-4 space-y-3'>
      <div className='flex justify-between text-[#ababab]'>
        <span>Subtotal</span>
        <span>{subtotal} ETB</span>
      </div>
      <div className='flex justify-between text-[#ababab]'>
        <span>VAT 15%</span>
        <span>{tax} ETB</span>
      </div>
      <div className='flex justify-between text-[#f5f5f5] text-lg font-bold'>
        <span>Total</span>
        <span>{total} ETB</span>
      </div>
      <button
        disabled={cartItems.length === 0}
        className='w-full rounded-lg bg-[#f6b100] py-3 font-bold text-[#1f1f1f] hover:bg-[#d99b00] disabled:cursor-not-allowed disabled:bg-[#4a4a4a] disabled:text-[#ababab]'
      >
        Send to Kitchen
      </button>
      {cartItems.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className='w-full rounded-lg bg-[#262626] py-3 font-semibold text-[#ababab] hover:bg-[#343434]'
        >
          Clear Cart
        </button>
      )}
    </div>
  )
}

export default Bill
