import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, placeOrder, setPaymentMethod } from '../../redux/orderSlice'

const Bill = () => {
  const dispatch = useDispatch();
  const { cartItems, paymentMethod } = useSelector((state) => state.order);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.15);
  const total = subtotal + tax;

  return (
    <div className='mt-5 border-t border-[#343434] pt-4'>
      <div className='space-y-2 text-sm'>
        <div className='flex justify-between text-[#ababab]'>
          <span>Items ({cartItems.length})</span>
          <span>{subtotal} ETB</span>
        </div>
        <div className='flex justify-between text-[#ababab]'>
          <span>Tax (15%)</span>
          <span>{tax} ETB</span>
        </div>
      </div>

      <div className='mt-3 flex justify-between text-[#f5f5f5] font-bold'>
        <span>Total With Tax</span>
        <span>{total} ETB</span>
      </div>

      <div className='mt-5 grid grid-cols-2 gap-2 rounded-lg bg-[#1f1f1f] p-1'>
        {['Cash', 'Online'].map((method) => (
          <button
            key={method}
            onClick={() => dispatch(setPaymentMethod(method))}
            className={`${paymentMethod === method ? 'bg-[#262626] text-[#f5f5f5]' : 'text-[#ababab]'} rounded-lg py-3 font-semibold`}
          >
            {method}
          </button>
        ))}
      </div>

      <div className='mt-5 grid grid-cols-2 gap-3'>
        <button
          disabled={cartItems.length === 0}
          className='rounded-lg bg-[#025cca] py-3 font-bold text-[#f5f5f5] hover:bg-[#024da8] disabled:cursor-not-allowed disabled:bg-[#4a4a4a] disabled:text-[#ababab]'
        >
          Print Receipt
        </button>
        <button
          onClick={() => dispatch(placeOrder())}
          disabled={cartItems.length === 0}
          className='rounded-lg bg-[#f6b100] py-3 font-bold text-[#1f1f1f] hover:bg-[#d99b00] disabled:cursor-not-allowed disabled:bg-[#4a4a4a] disabled:text-[#ababab]'
        >
          Place Order
        </button>
      </div>

      {cartItems.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className='mt-3 w-full rounded-lg bg-[#262626] py-3 font-semibold text-[#ababab] hover:bg-[#343434]'
        >
          Clear Cart
        </button>
      )}
    </div>
  )
}

export default Bill
