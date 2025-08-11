import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  input: '',
  products: [
    {
      title: "s"
    },
    {
      title: "d"
    },
    {
      title: "t"
    },
    {
      title: "h"
    },
  ]
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct: (state, actiion) => {

    },
    filterProductByInputSearch: (state, action) => {
      state.products = state.products.filter(d => d.title.toLowerCase()
      .includes(action.payload.toLowerCase()
      ))
    },
    filterProductByCategory: (state, action) => {}
  }
})


export default productSlice.reducer
export const {} = productSlice.actions