import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const syncCartToDb = createAsyncThunk("cart/syncCartToDb",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/cart/fetch-cart-items",{}, {
        withCredentials: true,
      });
      if (res.status == 200) {
        return res.data.data
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
  reducers: {
    addCartItem: (state, action) => {
      const itemId = action.payload?._id
      state.itemId.addItem.unshift(itemId)
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload._id
      state.itemId.removeItem.unshift(itemId)
    },
    deleteCartItem: (state, action) => {
      const itemId = action.payload._id
      state.itemId.deleteItem.unshift(itemId)
    }
  },
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
export const { addCartItem, deleteCartItem, removeCartItem } = cartSlice.actions