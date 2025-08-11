import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  isLoggedIn: false
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn: () => {}
  }
})

export default authSlice.reducer
export const {isLoggedIn} = authSlice.actions