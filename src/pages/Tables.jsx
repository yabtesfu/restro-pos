import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton';
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants';

const Tables = () => {

    const navigate = useNavigate();
    const [status, setStatus] = useState('all');
    const filteredTables = status === 'all'
      ? tables
      : tables.filter((table) => table.status.toLowerCase() === status);

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
        <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
            <button onClick={() => setStatus('all')} className={`${status === 'all' ? 'bg-[#343434] text-[#f5f5f5]' : 'text-[#ababab] hover:bg-[#383838]'} text-lg px-5 py-2 rounded-lg font-semibold transition-colors`}>All</button>
            <button onClick={() => setStatus('booked')} className={`${status === 'booked' ? 'bg-[#343434] text-[#f5f5f5]' : 'text-[#ababab] hover:bg-[#383838]'} text-lg px-5 py-2 rounded-lg font-semibold transition-colors`}>Booked</button>
           
        </div>
        </div>
        <div className="grid grid-cols-5 gap-6 px-6 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]" >

        {filteredTables.map((table) => (
          <TableCard key={table.id} table={table} onClick={() => navigate('/menu')} />
        ))}
        </div>
        
        <BottomNav />
    </section>
  );
};

export default Tables
