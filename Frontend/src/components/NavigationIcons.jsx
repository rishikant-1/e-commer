import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { FiGrid } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FaOpencart } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { categoryMenuPopup, navigationMenu } from '../Redux&Toolkit/Slice/menuSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function NavigationIcons() {

  const { popup } = useSelector((state => state.menu))
  const { navigationPopup } = useSelector((state => state.menu))
  const dispatch = useDispatch()
 

  return (
    <div className='lg:hidden z-50 fixed bottom-0 sm:bottom-5 w-full sm:w-sm right-[50%] translate-x-[50%] bg-white text-black p-3 rounded-xl shadow-sm shadow-[#0000006d] flex items-center justify-between'>
      <TfiMenuAlt className='cursor-pointer'
      onClick={() => dispatch(navigationMenu(!navigationPopup))}  
      size={"25px"}
      />
      <Link to='/wishlist' className='relative cursor-pointer'>
        <GoHeart size={"25px"} />
        <span className='absolute flex items-center justify-center -top-1.5 -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-sm'>0</span>
      </Link>
      <Link to='/'><AiOutlineHome className='cursor-pointer' size={"25px"} /></Link>
      <Link to='/cart' className='relative cursor-pointer'>
        <FaOpencart size={"30px"} />
        <span className='absolute flex items-center justify-center -top-1 -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-sm'>0</span>
      </Link>
      <FiGrid className='cursor-pointer'
      size={"25px"}
      onClick={() => dispatch(categoryMenuPopup(!popup))} 
      />
    </div>
  )
}

export default NavigationIcons