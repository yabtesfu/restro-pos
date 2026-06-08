import React from 'react'
import { useSelector } from 'react-redux'

const Customerinfo = () => {
  const { customer, selectedTable } = useSelector((state) => state.order);
  const initial = (customer.name || 'Customer Name')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className='border-b border-[#2a2a2a] pb-5'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h2 className='text-[#f5f5f5] text-lg font-bold'>{customer.name || 'Customer Name'}</h2>
          <p className='mt-1 text-[#ababab] text-sm'>{customer.phone || '#N/A'} / Dine in</p>
          <p className='mt-2 text-[#ababab] text-sm'>Table: {selectedTable?.name || 'Not selected'} · {customer.guests} Guests</p>
        </div>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-[#f6b100] text-xl font-bold text-[#1f1f1f]'>
          {initial || 'CN'}
        </div>
      </div>
    </div>
  )
}

export default Customerinfo
