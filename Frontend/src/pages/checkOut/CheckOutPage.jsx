import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { register, handleSubmit } = useForm();
  const [newAddress, setNewAddress] = useState(false);

  const subtotal = 2000;
  const tax = subtotal * 0.18;
  const shipping = 99;
  const total = subtotal + tax + shipping;

  const submitData = (data) => {
    data.products = [
      {item: 'product'}
    ]
    console.log("Checkout Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="grid grid-cols-3 gap-6 py-6 px-24"
    >
      {/* Left Section */}
      <div className="col-span-2 border border-gray-200 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

        {/* Payment Options */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="card"
              {...register("payment", { required: true })}
              className="accent-red-500"
            />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="cod"
              {...register("payment", { required: true })}
              className="accent-red-500"
            />
            Cash on Delivery
          </label>
        </div>

        {/* Address Section */}
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

        <div className="flex flex-col gap-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              value="saved"
              {...register("address", { required: true })}
              onClick={() => setNewAddress(false)}
              className="mt-1 size-5"
            />
            <div>
              <p>115 Kala Enclave, Sector 62, NOIDA, Uttar Pradesh, 201309, India</p>
              <p>Phone: 7007042225</p>
              <Link className="text-blue-500 underline" to="#">
                Edit Address
              </Link>
            </div>
          </label>

          <label className="flex gap-3 mb-3 cursor-pointer">
            <input
              type="radio"
              value="new"
              {...register("address")}
              onClick={() => setNewAddress(true)}
              className="size-5"
            />
            <h3>Add New Address</h3>
          </label>
        </div>

        {/* New Address Form */}
        <div
          className={`grid grid-cols-2 gap-4 overflow-hidden transition-all duration-500 ${
            newAddress ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <input
            {...register("streetAddress")}
            placeholder="Street Address"
            className="border p-2 rounded w-full col-span-2"
          />
          <input
            {...register("city")}
            placeholder="City"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("state")}
            placeholder="State"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("postalCode")}
            placeholder="Postal Code"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("country")}
            placeholder="Country"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="border border-gray-200 max-h-fit rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="flex items-center">
            <LuIndianRupee className="mr-1 text-sm" /> {subtotal}
          </span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Tax (18%)</span>
          <span className="flex items-center">
            <LuIndianRupee className="mr-1 text-sm" /> {tax.toFixed(0)}
          </span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span className="flex items-center">
            <LuIndianRupee className="mr-1 text-sm" /> {shipping}
          </span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span className="flex items-center">
            <LuIndianRupee className="mr-1 text-sm" /> {total.toFixed(0)}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-red-300 hover:bg-red-400 text-white py-2 rounded-lg mt-5"
        >
          Place Order
        </button>
      </div>
    </form>
  );
}
