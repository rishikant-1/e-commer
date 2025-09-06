import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const syncCartToDB = createAsyncThunk("cart/syncToDb", async (cart, { rejectWithValue }) => {
  try {
    console.log(cart.totalAmount);
    
    const payload = {
      items: items.map(item => ({
        itemId: item.itemId || item._id,
        quantity:  item.quantity
      })),
      totalAmount
    }
    const res = await axios.post("/api/cart/add-cart-item", payload, {
      withCredentials: true,
    });
    if(res.status == 200){
      
      return res.data.data
    }
  } catch (error) {
    return rejectWithValue(error)
  }
})

// Fetch Cart Data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/api/cart/get-all-cart-items",
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong while fetching cart data"
      );
    }
  }
);


const initialState = {
  items: [],
  status: "idle",
  totalAmount: 0,
  error: null,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Item
    addItems: (state, action) => {
      const item = action.payload;
      const existedItem = state.items.find(
        (i) => i.itemId === item._id || i.itemId === item.itemId
      );

      if (existedItem) {
        existedItem.quantity++;
        state.totalAmount += existedItem.price;
      } else {
        state.items.unshift({
          ...item,
          quantity: 1,
          itemId: item._id || item.itemId, // normalize
        });
        state.totalAmount += item.price;
      }
    },

    // Remove One Qty
    removeItem: (state, action) => {
      const item = action.payload;
      const existedItem = state.items.find(
        (i) => i.itemId === item._id || i.itemId === item.itemId
      );

      if (existedItem) {
        if (existedItem.quantity > 1) {
          existedItem.quantity -= 1;
          state.totalAmount -= existedItem.price;
        } else {
          state.items = state.items.filter((i) => i.itemId !== existedItem.itemId);
          state.totalAmount -= existedItem.price;
        }
      }
    },

    // Delete Full Item
    deleteItem: (state, action) => {
      const { _id, itemId } = action.payload;
      const existedItem = state.items.find(
        (i) => i.itemId === _id || i.itemId === itemId
      );

      if (existedItem) {
        state.items = state.items.filter((i) => i.itemId !== existedItem.itemId);
        state.totalAmount -= existedItem.price * existedItem.quantity;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(syncCartToDB.pending, (state) => {
        state.status = "loading";
      })
      .addCase(syncCartToDB.fulfilled, (state, action) => {
        if (action.payload?.items) {
          state.items = action.payload.items;
          state.totalAmount = action.payload.totalAmount || 0;
        }
        state.status = "succeed";
      })
      .addCase(syncCartToDB.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })

      // fetchCartData
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        if (action.payload?.items) {
          state.items = action.payload.items;
          state.totalAmount = action.payload.totalAmount || 0;
        }
        state.status = "succeed";
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.error = action.payload;
        state.items = [];
        state.status = "rejected";
      });
  },
});

export const { addItems, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
















import { Cart } from "../models/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import { Product } from "../models/product.model.js";

import mongoose from "mongoose";

const addItems = asyncHandler(async (req, res) => {
  const user = req.user;
  let { items, totalAmount } = req.body;


  items = items.map(i => ({
    ...i,
    itemId: new mongoose.Types.ObjectId(i.itemId)
  }));

  let cart = await Cart.findOneAndUpdate(
    { userId: user._id },
    {
      $set: {
        items,
        totalAmount
      }
    },
    { new: true, upsert: true }
  );

  return res
    .status(200)
    .json(new apiResponse(200, cart, "item added to cart successfully"));
});


const getAllCartItems = asyncHandler(async (req, res) => {
  const items = await Cart.findOne({ userId: req.user._id })
    .populate("items.itemId");

  console.log(items);

  if (!items) {
    throw new ApiError(400, "cart items not found");
  }

  return res
    .status(200)
    .json(new apiResponse(200, items, "cart items fetched successfully"));
});


export { addItems, getAllCartItems };
