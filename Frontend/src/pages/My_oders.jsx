import React from "react";
import img from '../assets/products/3.jpg'

const OrderHistory = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Order history</h1>
        <p className="text-sm text-gray-500">
          Check the status of recent orders, manage returns, and download invoices.
        </p>
      </div>

      {/* Order Summary Card */}
      <div className="w-full rounded-md border border-gray-200 shadow-sm bg-white p-6 flex flex-col justify-between items-start md:items-center gap-4">
        <div className="w-full border-b-1 border-gray-200 bg-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div>
              <p className="text-sm text-gray-500">Date placed</p>
              <p className="text-sm font-medium">January 22, 2021</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Order number</p>
              <p className="text-sm font-medium">WU88191111</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total amount</p>
              <p className="text-sm font-semibold">$238.00</p>
            </div>
          </div>

          {/* Button */}
          <button className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            View Invoice
          </button>
        </div>
        <div className=" overflow-x-scroll">
          <div className="grid grid-cols-6 text-sm text-gray-500">
            <p className="px-6 py-3 col-span-2 font-medium">Product</p>
            <p className="px-6 py-3 font-medium">Price</p>
            <p className="px-6 py-3 col-span-2 font-medium">Status</p>
            <p className="px-6 py-3 font-medium">Info</p>
          </div>
          <div className="grid grid-cols-6">
            <div className="flex ml-4 items-center gap-2 col-span-2">
              <img
                src={img}
                alt="Pen"
                className="w-12 h-12 rounded-md object-cover"
              />
              <span className="text-sm font-medium text-gray-900">
                Machined Pen and Pencil Set
              </span>
            </div>

            <div className="grid grid-cols-4 col-span-4">
              <p className="px-6 py-4 text-sm text-gray-700">$70.00</p>
              <p className="px-6 py-4 text-sm text-gray-700 col-span-2">
                Delivered Jan 25, 2021
              </p>
              <p className="px-6 py-4 text-sm">
                <button className="text-indigo-600 hover:underline text-nowrap">
                  View Product
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
