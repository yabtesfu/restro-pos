import React from 'react'

const MenuCategoryTabs = ({ menus, selectedMenuId, onSelect }) => {
  return (
    <div className='grid grid-cols-4 gap-3'>
      {menus.map((menu) => {
        const isSelected = selectedMenuId === menu.id;

        return (
          <button
            key={menu.id}
            onClick={() => onSelect(menu.id)}
            className='min-h-[96px] rounded-lg px-4 py-4 text-left text-[#f5f5f5] shadow-lg transition-transform hover:-translate-y-0.5'
            style={{ backgroundColor: menu.bgColor }}
          >
            <div className='flex items-center justify-between'>
              <span className='text-base font-bold'>{menu.icon} {menu.name}</span>
              {isSelected && <span className='h-3 w-3 rounded-full border-2 border-[#f5f5f5]' />}
            </div>
            <p className='mt-5 text-sm font-semibold text-[#f5f5f5]/80'>{menu.items.length} Items</p>
          </button>
        )
      })}
    </div>
  )
}

export default MenuCategoryTabs
