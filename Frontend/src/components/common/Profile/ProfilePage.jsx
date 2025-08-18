import React from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaBox, FaHeart, FaSignOutAlt } from "react-icons/fa";

function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto bg-white mt-5 overflow-hidden">

      <div className="flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-gray-400 text-9xl" />
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">Rishi Kant</h2>
          <p className="flex items-center gap-2 text-gray-600">
            <FaEnvelope className="text-blue-500" /> rishi@example.com
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <FaPhone className="text-green-500" /> +91 9876543210
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-red-500" /> Saharanpur, Uttar Pradesh, India
          </p>
        </div>
        <button className="mt-3 px-4 py-2 bg-red-300 text-white rounded-md flex items-center gap-2 hover:bg-red-400">
          <FaEdit /> Edit Profile
        </button>
      </div>

      <hr className='opacity-30' />

      {/* Address Section */}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4">Saved Addresses</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-1 border-gray-200 rounded-md p-4 shadow-sm">
            <h4 className="font-semibold text-gray-800">Home</h4>
            <p className="text-gray-600">123, Street Name, Saharanpur</p>
            <p className="text-gray-600">Uttar Pradesh, India - 247001</p>
            <p className="text-gray-600">Phone: +91 9876543210</p>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4 shadow-sm">
            <h4 className="font-semibold text-gray-800">Office</h4>
            <p className="text-gray-600">2nd Floor, IT Park</p>
            <p className="text-gray-600">Delhi NCR, India - 110001</p>
            <p className="text-gray-600">Phone: +91 9123456780</p>
          </div>
        </div>
      </div>

      <hr className='opacity-30' />

      {/* Order & Wishlist History */}
      <div className="grid md:grid-cols-2 gap-6 p-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBox className="text-red-300" /> Order History
          </h3>
          <ul className="space-y-3">
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Order #12345 - Nike Shoes</span>
              <span className="text-green-600 font-semibold">Delivered</span>
            </li>
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Order #12346 - iPhone 14</span>
              <span className="text-yellow-600 font-semibold">Shipped</span>
            </li>
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Order #12347 - JBL Headphones</span>
              <span className="text-red-600 font-semibold">Cancelled</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaHeart className="" /> Wishlist
          </h3>
          <ul className="space-y-3">
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Samsung Galaxy S23</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Adidas T-shirt</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
            <li className="border-1 border-gray-200 rounded-md p-3 flex justify-between items-center">
              <span>Apple Watch</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Logout Section */}
      <div className="p-8  flex justify-end">
        <button className="px-5 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
