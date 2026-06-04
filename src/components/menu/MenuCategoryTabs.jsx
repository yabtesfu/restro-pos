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
            className={`${isSelected ? 'bg-[#343434] text-[#f5f5f5]' : 'bg-[#262626] text-[#ababab] hover:bg-[#2f2f2f]'} flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors`}
          >
            <span
              className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-[#f5f5f5]'
              style={{ backgroundColor: menu.bgColor }}
            >
              {menu.icon}
            </span>
            <span className='font-semibold'>{menu.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export default MenuCategoryTabs
