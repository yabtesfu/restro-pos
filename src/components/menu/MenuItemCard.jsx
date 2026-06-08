import React from 'react'
import { useSelector } from 'react-redux'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'

const MenuItemCard = ({ item, cartKey, onAdd, onIncrease, onDecrease }) => {
  const cartItem = useSelector((state) =>
    state.order.cartItems.find((itemInCart) => itemInCart.cartKey === cartKey)
  );
  const quantity = cartItem?.quantity || 0;

  return (
    <div className='bg-[#262626] rounded-lg p-4 shadow-lg'>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h3 className='text-[#f5f5f5] text-base font-bold'>{item.name}</h3>
          <p className='mt-8 text-[#f5f5f5] text-xl font-bold'>{item.price} ETB</p>
        </div>
        <button
          onClick={() => onAdd(item)}
          className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2e4a40] text-[#02ca3a] hover:bg-[#376452]'
        >
          <FaShoppingCart size={18} />
        </button>
      </div>

      <div className='mt-5 ml-auto flex w-[112px] items-center justify-between rounded-lg bg-[#1f1f1f] px-3 py-2'>
        <button onClick={() => onDecrease(cartKey)} className='text-[#f6b100] disabled:text-[#4a4a4a]' disabled={quantity === 0}>
          <FaMinus size={12} />
        </button>
        <span className='text-[#f5f5f5] font-semibold'>{quantity}</span>
        <button onClick={() => onIncrease(cartKey, item)} className='text-[#f6b100]'>
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  )
}

export default MenuItemCard
