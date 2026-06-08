import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { decreaseCartItem, increaseCartItem, removeCartItem } from '../../redux/orderSlice'

const Cartinfo = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.cartItems);

  return (
    <div className='mt-5 flex-1 space-y-3 overflow-y-auto scrollbar-hide'>
      {cartItems.length === 0 ? (
        <div className='flex h-full min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[#343434] px-6 text-center text-[#ababab]'>
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
              <button
                onClick={() => dispatch(removeCartItem(item.cartKey))}
                className='text-[#ababab] hover:text-[#be3e3f]'
              >
                <FaTrash size={14} />
              </button>
            </div>

            <div className='mt-3 flex items-center justify-between'>
              <div className='flex items-center gap-3 rounded-lg bg-[#1f1f1f] px-3 py-2'>
                <button onClick={() => dispatch(decreaseCartItem(item.cartKey))} className='text-[#f6b100]'>
                  <FaMinus size={12} />
                </button>
                <span className='w-6 text-center text-[#f5f5f5] font-semibold'>{item.quantity}</span>
                <button onClick={() => dispatch(increaseCartItem(item.cartKey))} className='text-[#f6b100]'>
                  <FaPlus size={12} />
                </button>
              </div>
              <p className='text-[#f5f5f5] font-bold'>{item.price * item.quantity} ETB</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cartinfo
