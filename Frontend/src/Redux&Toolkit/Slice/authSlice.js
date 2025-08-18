import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchUser = createAsyncThunk('auth/fetchUser', 
  async (_, {rejectWithValue}) => {
  try {
    const res = await axios.post('/api/user/user-data',{},{withCredentials: true})
    return res.data.data
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message)
  }
})

const initialState = {
  user: null,
  status: "idle",
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null
      state.status = "idle"
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state)=>{
      state.status = 'loading'
    })
     .addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'success'
      state.user = action.payload?.userData
     })
     .addCase(fetchUser.rejected, (state, action)=>{
      state.status = 'failed'
      state.user = null
      state.error = action.payload || action.error?.message
     })
  }
})

export default authSlice.reducer
export const {clearUser} = authSlice.actions