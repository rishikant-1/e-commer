import React, { useEffect, useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import jacket3 from '../assets/products/jacket-3.jpg';
import Footer from "../components/common/Footer/Footer"
import HeaderTop from "../components/common/HeaderTop/HeaderTop";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


function Cart() {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <HeaderTop />
      <div className="grid lg:grid-cols-[70%_1fr] grid-cols-1 gap-12 w-full mt-6 bg-gray-50 px-4 sm:10 md:18 lg:px-24 py-5 h-auto">
        <div className="shadow-md px-2 md:p-5 rounded-md order-2 lg:order-1">
          <h1 className="text-3xl pink py-2 font-sans">Shopping Cart</h1>
          <p className="text-right border-b border-gray-400">Price</p>
          <div className=" w-full flex pb-4 mt-10  md:pr-3" >
            {items.map((item) => (
              <div key={item._id} className=" flex w-full bg-white border-1 border-gray-200 rounded-md">
                <img className="h-38 sm:h-40" src={jacket3} alt="image" />
                <div className="w-full py-3">
                  <div className="flex-col justify-between items-start w-full">
                    <p className="max-w-md text-[1.3rem] tracking-tight mdtext-[1.5rem] font-sans">{item.title}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through text-gray-500">₹2,999</span>
                      <span className="text-lg font-bold text-black">₹{item.price}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-md text-xs">-63%</span>
                    </div>
                    <p className="text-green-500 text-sm">In Stock</p>
                    <p className="text-[#531414] rounded-md opacity-70 font-bold">{item.category}</p>
                  </div>
                  <p className="opacity-70 tracking-tight text-nowrap">Eligible for FREE Shipping</p>
                  <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                    <div className="w-36 sm:w-30 absolute left-10 bottom-6 sm:static flex items-center justify-between mt-6 rounded-full px-5 cursor-pointer bg-white shadow">
                      <p className="text-3xl font-bold">-</p>
                      <p className="text-2xl font-semibold font-sans pb-1">{item.quantity}</p>
                      <p className="text-2xl font-bold">+</p>
                    </div>
                    <div className="flex items-center gap-3 text-nowrap flex-wrap">
                      <Link to='/delete' className="border-none pink text-[#2162a1] hover:underline text-sm">delete</Link>
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
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" />
                2
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" />
                2
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" />
                9
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span className="flex items-center text-green-600">
                <LuIndianRupee className="mr-1 text-sm" />
                89
              </span>
            </div>
          </div>
          <button
            className="w-full mt-6 bg-[#ff7979] text-white py-2 px-4 rounded hover:bg-red-400 transition-all"
            onClick={() => { }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
