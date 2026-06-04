import React from 'react'

const tableColors = ['#025cca', '#be3e3f', '#02ca3a', '#f6b100'];

const TableCard = ({ table, onClick }) => {
  const isBooked = table.status === 'Booked';
  const circleColor = tableColors[(table.id - 1) % tableColors.length];

  return (
    <div onClick={onClick} className='relative h-[210px] bg-[#262626] rounded-lg p-6 cursor-pointer shadow-lg hover:bg-[#2b2b2b] transition-colors'>
      <div className='flex items-start justify-between'>
        <h2 className='text-[#f5f5f5] text-2xl font-bold'>{table.name}</h2>
        <p className={`${isBooked ? 'bg-[#2e4a40] text-[#02ca3a]' : 'bg-[#664a04] text-[#f5f5f5]'} px-3 py-2 rounded-lg text-lg font-semibold`}>
          {table.status}
        </p>
      </div>

      <div className='absolute inset-0 flex items-center justify-center pt-8'>
        <div
          className='w-20 h-20 rounded-full flex items-center justify-center text-[#f5f5f5] text-2xl font-semibold shadow-md'
          style={{ backgroundColor: circleColor }}
        >
          {table.initial}
        </div>
      </div>
    </div>
  )
}

export default TableCard
