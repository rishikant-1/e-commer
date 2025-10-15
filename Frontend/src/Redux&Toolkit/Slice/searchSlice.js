import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllProduct = createAsyncThunk('product/fetchAllProduct', async(_, {rejectWithValue}) => 
{
  try {
    const res = await axios.post(`${API}/api/seller/get-all-product`)  
    return res?.data?.data
  } catch (error) {
    return rejectWithValue(error?.response?.data || error.message)
  }
})


const initialState = {
  products: [],
  shortedProducts: [],
  status: 'idle'
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct: (state) => {
      state.shortedProducts = [...state.products];
    },
    filterProductByInputSearch: (state, action) => {
      state.shortedProducts = state.products?.filter(d => d?.title?.toLowerCase()
      .includes(action.payload.toLowerCase()
      ))
    },  
    filterProductByCategory: (state, action) => { 
      state.shortedProducts = state.products?.filter(d => d.category === action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProduct.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.status = 'success'
      state.products = action.payload || []
      state.shortedProducts = [...state?.products]
    })
    .addCase(fetchAllProduct.rejected, (state, action) => {
      state.status = 'failed'
      state.products = []
    })
  }
})


export default productSlice.reducer
export const {getAllProduct, filterProductByCategory, filterProductByInputSearch} = productSlice.actions