import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { MdOutlineTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const BottomNav = () => {

  const navigate = useNavigate();
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button onClick={() => navigate('/home')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className="inline mr-2" size={20} />Home</button>
        <button onClick={() => navigate('/orders')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
        <button onClick={() => navigate('/tables')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><MdOutlineTableBar className="inline mr-2" size={20} />Tables</button>
        <button onClick={() => navigate('/more')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><CiCircleMore className="inline mr-2" size={20} />More</button>

        <button onClick={() => navigate('/create-order')} className="absolute bottom-6 bg-[#343434] text-[#f6b100] p-3 rounded-full border border-[#4a4a4a] shadow-lg">
            <BiSolidDish size={30} />
        </button>
    </div>
  )
}

export default BottomNav
