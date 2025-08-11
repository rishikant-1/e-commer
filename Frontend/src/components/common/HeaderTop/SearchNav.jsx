import React, { useState } from 'react'
import logo from '../../../assets/logo/logo.svg'
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function SearchNav() {
  const [profileTab, setProfileTab] = useState(false)



  return (
    <div className='flex sm:flex-row flex-col items-center justify-between py-5 px-24 border-1 border-gray-200'>
      <img className='w-30' src={logo} alt="logo" />
      <input className='w-[23rem] md:w-3xl lg:w-5xl md:block p-2 outline-0 ring-1 ring-gray-200 rounded-md' type="text" placeholder='Enter Your Product Name' />
      <div className='hidden md:flex items-center gap-4'>
        <div className='cursor-pointer opacity-100 relative'>
          <FaRegCircleUser size={"24px"} onClick={() => setProfileTab(!profileTab)} />
          <div className={`absolute ${profileTab && 'visible'} invisible top-10 right-3 w-60 z-40 shadow-xl bg-white rounded-md pb-2
          overflow-hidden border border-gray-200 animate-slide-down`}>

            {/* Profile Header */}
            <div className="flex flex-col items-center justify-center py-2 bg-gradient-to-r from-pink-50 to-pink-0">
              <img
                className="h-16 w-16 rounded-full object-cover border border-pink-300 shadow-sm"
                src="/profile.jpg"
                alt="Profile"
              />
              <div className='items-center hidden flex-col'>
                <h3 className="text-lg font-semibold mt-2">Rishi kant</h3>
                <p className="text-sm text-gray-600">rishi@gmail.com</p>
                <span className="bg-yellow-300 text-yellow-800 text-xs px-3 py-1 mt-1 rounded-full">🌟 Premium Member</span>
              </div>
              <div className='flex items-center flex-col'>
                <Link to='/auth/user-login' className="text-md hover:text-blue-500 hover:underline font-sans font-semibold mt-2">Login/SignUp</Link>
                
              </div>
            </div>

            {/* Quick Stats */}
            <div className="justify-around border-b border-gray-200 hidden">
              <div className="text-center">
                <p className="text-xl font-bold">12</p>
                <p className="text-sm text-gray-500">Orders</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">5</p>
                <p className="text-sm text-gray-500">Wishlist</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">3</p>
                <p className="text-sm text-gray-500">Cart</p>
              </div>
            </div>
            {/* Menu Options */}
            <div className="flex flex-col">
              <button className="px-4 py-2 text-left hover:bg-gray-100">My Account</button>
              <Link to='seller-login' className="px-4 py-2 text-left hover:bg-gray-100">Login as a seller</Link>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Help Center</button>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Settings</button>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-200">
              <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50">
                Logout
              </button>
            </div>
          </div>

        </div>
        <div className='relative cursor-pointer'>
          <GoHeart size={"25px"} />
          <span className='absolute flex items-center justify-center -top-1.5 -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-sm'>0</span>
        </div>
        <Link to='/cart' className='relative cursor-pointer'>
          <FaOpencart size={"30px"} />
          <span className='absolute flex items-center justify-center -top-1 -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-sm'>0</span>
        </Link>
      </div>

    </div>
  )
}

export default SearchNav