import React, { useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";


function CheckoutPage() {
  const [newAddress, setNewAddress] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8">
        {/* Left Side - Checkout Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          {/* Shipping Address */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Shipping Address</h3>

            <div className="border p-2 my-4 rounded-md">
              <label className="flex items-start gap-3" onClick={() => setNewAddress(false)}>
                <input className="mt-1 size-5" name="address" type="radio" />
                <div>
                  <p>115 kala inclave, Sector 62, NOIDA, UTTAR PRADESH, 201309, India</p>
                  <p>Phone number: 7007042225</p>
                  <Link className="text-blue-500 underline" to='#'>Edit Adress</Link>
                </div>
              </label>

            </div>
            <div>
              <label className="flex gap-3 mb-3">
                <input className="size-5 ml-2"
                  onClick={e=>setNewAddress(()=>e.target ? true : false)}
                  type="radio"
                  name="address" />
                <h3>Add New Address</h3>
              </label>
              <div className={`grid grid-cols-2 opacity-100 h-0 gap-4 invisible ${newAddress && 'visible h-full'} transition-all`}>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="border p-2 rounded w-full col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Payment Method</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
                <input type="radio" name="payment" className="accent-red-500" />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
                <input type="radio" name="payment" className="accent-red-500" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <button className="bg-[#ff7979] text-white px-6 py-3 rounded-lg hover:bg-red-400 transition w-full">
            Place Order
          </button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-5 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" /> 2000
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" /> 360
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="flex items-center">
                <LuIndianRupee className="mr-1 text-sm" /> 99
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span className="flex items-center text-green-600">
                <LuIndianRupee className="mr-1 text-sm" /> 2459
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
