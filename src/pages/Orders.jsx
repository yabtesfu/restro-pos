import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrdersCard from '../components/orders/OrderCard'
import BackButton from '../components/shared/BackButton';

const Orders = () => {
  const [selectedStatus, setSelectedStatus] = useState('In Progress');
  const statusFilters = ['All', 'In Progress', 'Ready', 'Completed'];

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Orders</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`text-lg px-5 py-2 rounded-lg font-semibold transition-colors ${
                selectedStatus === status
                  ? 'bg-[#343434] text-[#f5f5f5]'
                  : 'text-[#ababab] hover:bg-[#2a2a2a]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]" >
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
      </div>
        
      <BottomNav />
    </section>
  )
}

export default Orders
