import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function TopNav() {
  return (
    <div className='hidden sm:flex justify-between items-center px-24 py-3'>
      <ul className='flex items-center space-x-1'>
        <li className='h-7 w-7 flex items-center justify-center hover:bg-[#ff8f9c] bg-gray-100 rounded-full transition duration-300'>
          <Link to="#"><FaFacebookF /></Link>
        </li>
        <li className='h-7 w-7 flex items-center justify-center hover:bg-[#ff8f9c] bg-gray-100 rounded-full transition duration-300'>
          <Link to="#"><FaXTwitter /></Link>
        </li>
        <li className='h-7 w-7 flex items-center justify-center hover:bg-[#ff8f9c] bg-gray-100 rounded-full transition duration-300'>
          <Link to="#"><FaInstagram /></Link>
        </li>
        <li className='h-7 w-7 flex items-center justify-center hover:bg-[#ff8f9c] bg-gray-100 rounded-full transition duration-300'>
          <Link to="#"><FaLinkedinIn /></Link>
        </li>
      </ul>
      <p className='opacity-40 font-semibold hidden lg:block'>Free Shipping This Week Order Over - $55</p>
      <div className='flex items-center gap-3'>
        <select className='hover:opacity-100 font-semibold cursor-pointer opacity-45'>
          <option value="usd">USD $</option>
          <option value="eur">EUR €</option>
        </select>
        <select className='hover:opacity-100 font-semibold cursor-pointer opacity-45'>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
    </div>
  )
}

export default TopNav