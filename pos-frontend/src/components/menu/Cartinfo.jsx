import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { decreaseCartItem, increaseCartItem, removeCartItem } from '../../redux/orderSlice'

const Cartinfo = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.cartItems);

  return (
    <div className='mt-5 flex-1 space-y-3 overflow-y-auto scrollbar-hide'>
      <h2 className='text-[#f5f5f5] font-bold'>Order Details</h2>
      {cartItems.length === 0 ? (
        <div className='flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[#343434] px-6 text-center text-[#ababab]'>
          Add Ethiopian dishes from the menu.
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.cartKey} className='rounded-lg bg-[#1f1f1f] p-4'>
            <div className='flex items-start justify-between gap-3'>
              <div className='min-w-0'>
                <h3 className='truncate text-[#f5f5f5] font-semibold'>{item.name}</h3>
                <div className='mt-4 flex items-center gap-3 text-[#ababab]'>
                  <button
                    onClick={() => dispatch(removeCartItem(item.cartKey))}
                    className='hover:text-[#be3e3f]'
                  >
                    <FaTrash size={13} />
                  </button>
                  <button onClick={() => dispatch(decreaseCartItem(item.cartKey))} className='hover:text-[#f6b100]'>
                    <FaMinus size={13} />
                  </button>
                  <button onClick={() => dispatch(increaseCartItem(item.cartKey))} className='hover:text-[#f6b100]'>
                    <FaPlus size={13} />
                  </button>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-[#f5f5f5] text-sm font-semibold'>x{item.quantity}</p>
                <p className='mt-7 text-[#f5f5f5] font-bold'>{item.price * item.quantity} ETB</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cartinfo
