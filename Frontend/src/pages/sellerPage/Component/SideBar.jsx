import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineProduct, AiOutlineHome } from "react-icons/ai";
import { IoArrowBack, IoArrowDown, IoClose, IoHammer } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { RiAlignItemLeftLine } from "react-icons/ri";
import { productPopup } from '../../../Redux&Toolkit/Slice/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

function SideBar() {
  const dispatch = useDispatch()
  const [topbar, setTopbar] = useState(true)
  const { user } = useSelector(state => state.auth)
  return (
    <div className='ring-1 ring-gray-200 rounded-md p-2'>
      <div className='p-2 flex justify-between items-center text-xl bg-red-300 rounded-md font-bold text-white mb-3'>
        <h2>Hello, {user.fullname?.firstname}</h2>
        {
          topbar ? <IoArrowDown onClick={() => setTopbar(false)} /> : <IoClose onClick={() => setTopbar(true)} />
        }
      </div>
      <div
        className={`flex flex-col gap-3 bg-white overflow-hidden transition-all duration-500 ease-in-out ${topbar ? "opacity-0 max-h-0 scale-y-0" : "opacity-100 max-h-[500px] scale-y-100"
          }`}
      >
        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to=''
        >
          <AiOutlineHome size={"25px"} />
          Home
        </Link>

        <Link
          to="add-product"
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          onClick={() => dispatch(productPopup(true))}
        >
          <IoMdAdd size={"25px"} />
          Add Product
        </Link>

        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='my-products'
        >
          <RiAlignItemLeftLine size={"25px"} />
          Products
        </Link>

        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='dashboard'
        >
          <AiOutlineProduct size={"25px"} />
          DashBoard
        </Link>

        <Link
          className='bg-red-100 rounded-md p-2 hover:bg-red-300 transition duration-300 flex gap-1'
          to='/'
        >
          <IoArrowBack size={"25px"} />
          Go back
        </Link>
      </div>

    </div>
  )
}

export default SideBar