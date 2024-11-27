import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

const store = configureStore({
  // reducer: an object to define the slices of your state and their corresponding reducers
  //          In this case, the state has one slice named cart.
  reducer: {
    cart: cartReducer,
  },
});

export default store;