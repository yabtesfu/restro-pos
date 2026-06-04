import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const Cart = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.15);
  const total = subtotal + tax;

  return (
    <aside className='bg-[#1a1a1a] rounded-lg p-5 h-full flex flex-col'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[#f5f5f5] text-xl font-bold'>Cart</h2>
        <span className='rounded-lg bg-[#262626] px-3 py-1 text-sm font-semibold text-[#ababab]'>
          {cartItems.length} Items
        </span>
      </div>

      <div className='mt-5 flex-1 space-y-3 overflow-y-auto scrollbar-hide'>
        {cartItems.length === 0 ? (
          <div className='flex h-full items-center justify-center rounded-lg border border-dashed border-[#343434] px-6 text-center text-[#ababab]'>
            Add Ethiopian dishes from the menu.
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.cartKey} className='rounded-lg bg-[#262626] p-3'>
              <div className='flex items-center gap-3'>
                <img src={item.image} alt={item.name} className='h-14 w-14 rounded-lg object-cover' />
                <div className='min-w-0 flex-1'>
                  <h3 className='truncate text-[#f5f5f5] font-semibold'>{item.name}</h3>
                  <p className='text-[#ababab] text-sm'>{item.price} ETB</p>
                </div>
                <button onClick={() => onRemove(item.cartKey)} className='text-[#ababab] hover:text-[#be3e3f]'>
                  <FaTrash size={14} />
                </button>
              </div>

              <div className='mt-3 flex items-center justify-between'>
                <div className='flex items-center gap-3 rounded-lg bg-[#1f1f1f] px-3 py-2'>
                  <button onClick={() => onDecrease(item.cartKey)} className='text-[#f6b100]'>
                    <FaMinus size={12} />
                  </button>
                  <span className='w-6 text-center text-[#f5f5f5] font-semibold'>{item.quantity}</span>
                  <button onClick={() => onIncrease(item.cartKey)} className='text-[#f6b100]'>
                    <FaPlus size={12} />
                  </button>
                </div>
                <p className='text-[#f5f5f5] font-bold'>{item.price * item.quantity} ETB</p>
              </div>
            </div>
          ))
        )}
      </div>

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
        <button className='w-full rounded-lg bg-[#f6b100] py-3 font-bold text-[#1f1f1f] hover:bg-[#d99b00]'>
          Send to Kitchen
        </button>
      </div>
    </aside>
  )
}

export default Cart
