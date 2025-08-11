import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      _id: 'a111',
      price: 234,
      discount: 12,
      title: 'Best Jacket for winter season, save from cold air',
      quantity: 2,
      stock: 21,
      category: "Winter Clothes",
      reviews: [
        {
          review: 'Best quality product for winter season', 
          rating: 3,
          user: "Yash kumar"
        }
      ]
    }
  ],
  totalAmount: 234
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;
      const existedItem = state.items.find(i => i._id === item._id);
      if(existedItem){
        existedItem.quantity +=1;
        state.totalAmount += existedItem.price;
      }else{
        state.items.unshift({...action.payload, quantity: 1})
        state.totalAmount += item.price
      }
    },
    removeItem: (state, action) => {
      const existedItem = state.items.find(i => i._id === action.payload._id)
      if(existedItem && existedItem.quantity > 1){
        existedItem.quantity -= 1;
        state.totalAmount -= existedItem.price;
      }else{
        state.items = state.items.filter(i => i._id !==action.payload._id)
        state.totalAmount -= existedItem.price;
      }
    },
    deleteItem: (state, action) => {
      const {_id} = action.payload;
      const existedItem = state.items.find(i => i._id === _id)
      if(existedItem){
        state.items = state.items.filter(item => item._id !== _id)
        state.totalAmount -= existedItem.price * existedItem.quantity;
      }
    }
  }
})

export const {addItems,removeItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;