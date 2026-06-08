import { createSlice } from '@reduxjs/toolkit'
import { menus } from '../constants'

const initialState = {
  customer: {
    name: '',
    phone: '',
    guests: 0,
  },
  selectedTable: null,
  selectedMenuId: menus[0]?.id || 1,
  cartItems: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = {
        ...state.customer,
        ...action.payload,
      };
    },
    setGuestCount: (state, action) => {
      state.customer.guests = action.payload;
    },
    selectTable: (state, action) => {
      state.selectedTable = action.payload;
    },
    setSelectedMenuId: (state, action) => {
      state.selectedMenuId = action.payload;
    },
    addToCart: (state, action) => {
      const { menuId, item } = action.payload;
      const cartKey = `${menuId}-${item.id}`;
      const existingItem = state.cartItems.find((cartItem) => cartItem.cartKey === cartKey);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.cartItems.push({
        ...item,
        cartKey,
        quantity: 1,
      });
    },
    increaseCartItem: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.cartKey === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseCartItem: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.cartKey === action.payload);

      if (!item) return;

      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.cartKey !== action.payload);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.cartKey !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    resetOrder: () => initialState,
  },
});

export const {
  addToCart,
  clearCart,
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
  resetOrder,
  selectTable,
  setCustomer,
  setGuestCount,
  setSelectedMenuId,
} = orderSlice.actions;

export default orderSlice.reducer
