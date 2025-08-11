import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  popup: false,
  navigationPopup: false
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
    }
  }
})

export default popupSlice.reducer
export const { navigationMenu, categoryMenuPopup } = popupSlice.actions