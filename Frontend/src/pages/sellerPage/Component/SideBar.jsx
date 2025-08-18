import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineProduct, AiOutlineHome } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { RiAlignItemLeftLine } from "react-icons/ri";

function SideBar() {
  return (
    <div className='ring-1 ring-gray-200 rounded-md p-2'>
      <h3 className='p-2 text-xl bg-red-300 rounded-md font-bold text-white mb-3'>Hello, Rishi</h3>
      <div className='flex flex-col gap-3'>
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to=''>
          <AiOutlineHome size={"25px"} />
          Home
        </Link>
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='add-product'>
          <IoMdAdd size={"25px"} />
          Add Product
        </Link>
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='products'>
          <RiAlignItemLeftLine size={"25px"} />
          Products
        </Link>
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='dashboard'>
          <AiOutlineProduct size={"25px"} />
          DashBoard
        </Link>
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='/'>
          <IoArrowBack size={"25px"} />
          Go back
        </Link>

      </div>
    </div>
  )
}

export default SideBar