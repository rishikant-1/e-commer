import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const syncCartToDb = createAsyncThunk("cart/syncCartToDb",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/api/cart/fetch-cart-items`);
      if (res.status == 200) {
        return res.data.data;
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  items: [],
  status: "idle",
  error: null
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(syncCartToDb.pending, (state) => {
        state.status = "loading";
      })
      .addCase(syncCartToDb.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = action.payload;
        }
        state.status = "succeed";
      })
      .addCase(syncCartToDb.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })
  }
})

export default cartSlice.reducer
