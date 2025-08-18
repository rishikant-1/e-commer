import {configureStore} from '@reduxjs/toolkit'
import cartReducers from '../Slice/cartSlice'
import popupReducers from '../Slice/menuSlice'
import searchReducers from '../Slice/searchSlice'
import authReducers from '../Slice/authSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducers,
    menu: popupReducers,
    product: searchReducers,
    auth: authReducers
  }
})