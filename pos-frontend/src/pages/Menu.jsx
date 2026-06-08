import React from 'react'
import BackButton from '../components/shared/BackButton'
import BottomNav from '../components/shared/BottomNav'
import Cart from '../components/menu/Cart'
import MenuContainer from '../components/menu/MenuContainer'

const Menu = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-8 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
        </div>
        <p className='text-[#ababab] font-semibold'>Ethiopian Kitchen</p>
      </div>

      <div className='grid h-[calc(100vh-5rem-5rem)] grid-cols-[1fr_330px] gap-6 px-8 pb-20'>
        <MenuContainer />
        <Cart />
      </div>

      <BottomNav />
    </section>
  )
}

export default Menu
