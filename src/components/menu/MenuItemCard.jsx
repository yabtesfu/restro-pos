import React from 'react'
import { FaPlus } from 'react-icons/fa'

const MenuItemCard = ({ item, onAdd }) => {
  return (
    <div className='bg-[#262626] rounded-lg overflow-hidden'>
      <img src={item.image} alt={item.name} className='h-36 w-full object-cover' />
      <div className='p-4'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <h3 className='text-[#f5f5f5] text-lg font-bold'>{item.name}</h3>
            <p className='text-[#ababab] text-sm mt-1'>{item.category}</p>
          </div>
          <p className='text-[#f6b100] font-bold whitespace-nowrap'>{item.price} ETB</p>
        </div>

        <button
          onClick={() => onAdd(item)}
          className='mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#343434] px-4 py-3 font-semibold text-[#f5f5f5] hover:bg-[#3d3d3d]'
        >
          <FaPlus size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MenuItemCard
