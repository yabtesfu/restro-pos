import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menus } from '../../constants'
import { addToCart, decreaseCartItem, setSelectedMenuId } from '../../redux/orderSlice'
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

  const handleIncrease = (cartKey, item) => {
    const hasItem = cartKey && item;
    if (hasItem) {
      dispatch(addToCart({ menuId: selectedMenuId, item }));
    }
  };

  return (
    <div className='overflow-y-auto scrollbar-hide pr-2'>
      <MenuCategoryTabs
        menus={menus}
        selectedMenuId={selectedMenuId}
        onSelect={(menuId) => dispatch(setSelectedMenuId(menuId))}
      />

      <div className='mt-8 grid grid-cols-3 gap-4'>
        {selectedMenu.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            cartKey={`${selectedMenuId}-${item.id}`}
            onAdd={handleAddToCart}
            onIncrease={handleIncrease}
            onDecrease={(cartKey) => dispatch(decreaseCartItem(cartKey))}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuContainer
