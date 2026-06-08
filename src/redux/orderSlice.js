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
  paymentMethod: 'Cash',
  orders: [],
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
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    placeOrder: (state) => {
      if (state.cartItems.length === 0) return;

      const subtotal = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const tax = Math.round(subtotal * 0.15);

      state.orders.push({
        id: Date.now(),
        customer: state.customer,
        selectedTable: state.selectedTable,
        cartItems: state.cartItems,
        paymentMethod: state.paymentMethod,
        subtotal,
        tax,
        total: subtotal + tax,
        createdAt: new Date().toISOString(),
      });
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
  placeOrder,
  removeCartItem,
  resetOrder,
  selectTable,
  setCustomer,
  setGuestCount,
  setPaymentMethod,
  setSelectedMenuId,
} = orderSlice.actions;

export default orderSlice.reducer
