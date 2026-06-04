import React, { useMemo, useState } from 'react'
import BackButton from '../components/shared/BackButton'
import BottomNav from '../components/shared/BottomNav'
import Cart from '../components/menu/Cart'
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs'
import MenuItemCard from '../components/menu/MenuItemCard'
import { menus } from '../constants'

const Menu = () => {
  const [selectedMenuId, setSelectedMenuId] = useState(menus[0].id);
  const [cartItems, setCartItems] = useState([]);

  const selectedMenu = useMemo(
    () => menus.find((menu) => menu.id === selectedMenuId) || menus[0],
    [selectedMenuId]
  );

  const addToCart = (item) => {
    const cartKey = `${selectedMenuId}-${item.id}`;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.cartKey === cartKey);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.cartKey === cartKey
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentItems, { ...item, cartKey, quantity: 1 }];
    });
  };

  const increaseQuantity = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (cartKey) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey));
  };

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
        </div>
        <p className='text-[#ababab] font-semibold'>Ethiopian Kitchen</p>
      </div>

      <div className='grid h-[calc(100vh-5rem-5rem)] grid-cols-[1fr_360px] gap-6 px-10 pb-20'>
        <div className='overflow-y-auto scrollbar-hide pr-2'>
          <MenuCategoryTabs
            menus={menus}
            selectedMenuId={selectedMenuId}
            onSelect={setSelectedMenuId}
          />

          <div className='mt-6 flex items-center justify-between'>
            <div>
              <h2 className='text-[#f5f5f5] text-xl font-bold'>{selectedMenu.name}</h2>
              <p className='text-[#ababab] text-sm'>{selectedMenu.items.length} dishes available</p>
            </div>
          </div>

          <div className='mt-4 grid grid-cols-3 gap-5'>
            {selectedMenu.items.map((item) => (
              <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </div>

        <Cart
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeItem}
        />
      </div>

      <BottomNav />
    </section>
  )
}

export default Menu
