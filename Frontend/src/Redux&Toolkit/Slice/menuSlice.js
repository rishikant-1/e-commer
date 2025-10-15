import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  popup: false,
  navigationPopup: false,
  profilepopup: false,
  productpopup: false
}
const popupSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    navigationMenu: (state, action) =>{
      state.navigationPopup = action.payload
    },
    categoryMenuPopup: (state, action) => {
      state.popup = action.payload
    },
    profilePopup: (state, action) => {
      state.profilepopup = action.payload
    },
    productPopup: (state, action) => {
      state.productpopup = action.payload
    }
  }
})

export default popupSlice.reducer
export const { 
  navigationMenu, 
  categoryMenuPopup, 
  productPopup,
  profilePopup } = popupSlice.actions