import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import categoryReducer from "./categorySlice"
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    categories:categoryReducer,
  },
});
