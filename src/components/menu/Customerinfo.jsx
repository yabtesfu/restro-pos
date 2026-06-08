import React from 'react'
import { useSelector } from 'react-redux'
import { FaPhoneAlt, FaUserFriends } from 'react-icons/fa'
import { MdOutlineTableBar } from 'react-icons/md'

const Customerinfo = () => {
  const { customer, selectedTable } = useSelector((state) => state.order);

  return (
    <div className='rounded-lg bg-[#262626] p-4'>
      <h2 className='text-[#f5f5f5] text-lg font-bold'>Customer</h2>

      <div className='mt-4 space-y-3 text-sm'>
        <div>
          <p className='text-[#ababab]'>Name</p>
          <p className='text-[#f5f5f5] font-semibold'>{customer.name || 'Walk-in Customer'}</p>
        </div>

        <div className='flex items-center justify-between gap-3'>
          <p className='flex items-center gap-2 text-[#ababab]'>
            <FaPhoneAlt size={12} />
            {customer.phone || 'No phone'}
          </p>
          <p className='flex items-center gap-2 text-[#ababab]'>
            <FaUserFriends size={14} />
            {customer.guests} Guests
          </p>
        </div>

        <div className='flex items-center justify-between rounded-lg bg-[#1f1f1f] px-3 py-3'>
          <p className='flex items-center gap-2 text-[#f5f5f5] font-semibold'>
            <MdOutlineTableBar size={20} />
            {selectedTable?.name || 'No table selected'}
          </p>
          {selectedTable && (
            <span className='rounded-md bg-[#343434] px-2 py-1 text-xs font-semibold text-[#ababab]'>
              {selectedTable.seats} Seats
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Customerinfo
