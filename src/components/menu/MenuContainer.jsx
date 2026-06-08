import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menus } from '../../constants'
import { addToCart, setSelectedMenuId } from '../../redux/orderSlice'
import MenuCategoryTabs from './MenuCategoryTabs'
import MenuItemCard from './MenuItemCard'

const MenuContainer = () => {
  const dispatch = useDispatch();
  const selectedMenuId = useSelector((state) => state.order.selectedMenuId);

  const selectedMenu = useMemo(
    () => menus.find((menu) => menu.id === selectedMenuId) || menus[0],
    [selectedMenuId]
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart({ menuId: selectedMenuId, item }));
  };

  return (
    <div className='overflow-y-auto scrollbar-hide pr-2'>
      <MenuCategoryTabs
        menus={menus}
        selectedMenuId={selectedMenuId}
        onSelect={(menuId) => dispatch(setSelectedMenuId(menuId))}
      />

      <div className='mt-6 flex items-center justify-between'>
        <div>
          <h2 className='text-[#f5f5f5] text-xl font-bold'>{selectedMenu.name}</h2>
          <p className='text-[#ababab] text-sm'>{selectedMenu.items.length} dishes available</p>
        </div>
      </div>

      <div className='mt-4 grid grid-cols-3 gap-5'>
        {selectedMenu.items.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default MenuContainer
