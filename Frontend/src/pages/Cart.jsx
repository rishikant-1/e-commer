import React, { useEffect } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { syncCartToDb } from "../Redux&Toolkit/Slice/cartSlice";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { taxPrice } from "../utils/priceHelper";
import API from "../utils/Api";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart)
  const [TotalPrice, setTotalPrice] = useState(0);
  const shiping = 49
  useEffect(() => {
    if (items?.items?.length) {
      const total = items.items.reduce((acc, item) => {
        const price = item.itemId?.price?.basePrice || 0;
        return acc + price * item.quantity;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [items])
  const addItemsToCart = async (itemId) => {
    if (itemId) {
      const res = await axios.post(`${API}/api/cart/add-cart-item`, { itemId });
      if (res.status === 200) {
        dispatch(syncCartToDb());
        toast.success("Quantity increased");
      } else {
        toast.error("Somthing wrong");
      }
    }

  }
  const removeItemsToCart = async (itemId) => {
    if (itemId) {
      const res = await axios.post(`${API}/api/cart/remove-cart-item`, { itemId });
      if (res.status === 200) {
        dispatch(syncCartToDb());
        toast.success("Quantity decreased");
      } else {
        toast.error("Somthing wrong");
      }
    }
  }
  const deleteItemsToCart = async (itemId) => {
    if (itemId) {
      const res = await axios.post(`${API}/api/cart/delete-cart-item`, { itemId });
      if (res.status === 200) {
        dispatch(syncCartToDb());
        toast.success("Item deleted To Cart");
      } else {
        toast.error("Somthing wrong");
      }
    }
  }


  return (
    <div className="grid lg:grid-cols-[70%_1fr] grid-cols-1 gap-12 w-full mt-6 bg-gray-50 px-4 sm:10 md:18 lg:px-24 py-5 h-auto">
      <div className="shadow-md px-2 md:p-5 rounded-md order-2 lg:order-1">
        <h1 className="text-3xl pink py-2 font-sans">Shopping Cart</h1>
        <p className="text-right border-b border-gray-400">Products</p>
        <div className="w-full flex flex-col pb-4 mt-10  md:pr-3" >
          {items.items?.map((item) => (
            <div key={item.itemId._id} className="flex w-full gap-1 bg-white border-1 border-gray-200 rounded-md">
              <div className="w-60 h-60 flex p-2 rounded-md">
                <img className="w-full h-full object-cover rounded-md" src={item.itemId.thumbnail?.url} alt="image" />
              </div>
              <div className="w-full py-3">
                <div className="flex-col justify-between items-start w-full">
                  <p className="max-w-md text-[1.3rem] tracking-tight mdtext-[1.5rem] font-sans">{item.itemId.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through text-gray-500">₹2,999</span>
                    <span className="text-lg font-bold text-black">₹{item.itemId.price.basePrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-md text-xs">-63%</span>
                  </div>
                  <p className="text-green-500 text-sm">In Stock</p>
                  <p className="text-[#531414] rounded-md opacity-70 font-bold">{item.itemId.category}</p>
                </div>
                <Toaster />
                <p className="opacity-70 tracking-tight text-nowrap">Eligible for FREE Shipping</p>
                <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                  <div className="w-30 absolute left-10 -bottom-10 sm:static flex items-center justify-between mt-6 rounded-full px-5 cursor-pointer bg-white shadow">
                    <p className="text-3xl font-bold" onClick={() => removeItemsToCart(item.itemId._id)}>-</p>
                    <p className="text-2xl font-semibold font-sans pb-1">{item.quantity}</p>
                    <p className="text-2xl font-bold" onClick={() => addItemsToCart(item.itemId._id)}>+</p>
                  </div>
                  <div className="flex items-center gap-3 text-nowrap flex-wrap">
                    <button
                      onClick={() => deleteItemsToCart(item.itemId._id)}
                      className="border-none pink text-[#2162a1] hover:underline text-sm">delete</button>
                    <button className="border-none pink h-10 text-[#2162a1] hover:underline text-sm">Save for later</button>
                    <Link className="border-none pink text-[#2162a1] hover:underline text-sm">See more review</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg w-full shadow-md h-fit order-1 lg:order-2">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3 mb-5 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="flex items-center">
              <LuIndianRupee className="mr-1 text-sm" />
              {TotalPrice}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Tax (18%)</span>
            <span className="flex items-center">
              <LuIndianRupee className="mr-1 text-sm" />
              {taxPrice(TotalPrice, 18)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="flex items-center">
              <LuIndianRupee className="mr-1 text-sm" />
              {shiping}
            </span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span className="flex items-center text-green-600">
              <LuIndianRupee className="mr-1 text-sm" />
              {TotalPrice + shiping}
            </span>
          </div>
        </div>
        <Link
          to={'check-out'}
          className="w-full bg-[#ff7979] text-white py-2 px-4 rounded hover:bg-red-400 transition-all"
          onClick={() => { }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
