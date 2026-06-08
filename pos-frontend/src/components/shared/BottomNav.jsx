import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { MdOutlineTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import { setCustomer, setGuestCount } from '../../redux/orderSlice'


const BottomNav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.order.customer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState(customer.name);
  const [customerPhone, setCustomerPhone] = useState(customer.phone);
  const [guestCount, setLocalGuestCount] = useState(customer.guests);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if(guestCount >= 6 ) return;
    setLocalGuestCount((prev) => prev + 1);
  }
  const decrement = () => setLocalGuestCount((prev) => (prev > 0 ? prev - 1 : 0));
  const createOrder = () => {
    dispatch(setCustomer({ name: customerName, phone: customerPhone }));
    dispatch(setGuestCount(guestCount));
    closeModal();
    navigate("/tables");
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button onClick={() => navigate('/home')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className="inline mr-2" size={20} />Home</button>
        <button onClick={() => navigate('/orders')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
        <button onClick={() => navigate('/tables')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><MdOutlineTableBar className="inline mr-2" size={20} />Tables</button>
        <button onClick={() => navigate('/more')} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><CiCircleMore className="inline mr-2" size={20} />More</button>

        <button onClick={openModal} className="absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-4 items-center">
            <BiSolidDish size={40} />
        </button>
        
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input
                type="text"
                placeholder="Enter customer name"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Phone</label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input
                type="tel"
                placeholder="+251912345678"
                value={customerPhone}
                onChange={(event) => setCustomerPhone(event.target.value)}
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
            <div className='flex items-center justify-between rounded-lg py-3 px-4 bg-[#1f1f1f]'>
              <button onClick={decrement} className="text-yellow-500 text-2xl">&minus;</button>
              <span className="text-white">{guestCount} Person</span>
              <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
            </div>
          </div>
          <button onClick={createOrder} className="w-full bg-[#f6b100] text-[#1f1f1f] py-3 rounded-lg mt-8 font-bold hover:bg-[#d99b00]">
            Create Order
          </button>
        </Modal>
    </div>
  );
};

export default BottomNav
