import React from 'react';
import { MdArrowDropDown, MdArrowDropUp, MdArrowForward } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navigationData } from '../../objets/NavigationData';
import { useState } from 'react';

function NavigationBar() {
  const { navigationPopup } = useSelector(state => state.menu)
  const [activeIdx, setActiveIdx] = useState(null)
  const DropdownToggle = (index) => {
    setActiveIdx(activeIdx === index ? null : index)
  }
  return (
    <div className={`h-screen w-full ${navigationPopup && 'duration-300 opacity-100 visible'} opacity-100
     transition invisible lg:visible lg:h-auto lg:px-24 lg:block z-20 lg:static fixed bg-[#00000083]  left-0 top-0 lg:bg-white w-full`} >

      <ul className={`flex w-3xs lg:w-full ${navigationPopup && 'translate-x-0 duration-800'}
        -translate-x-100 lg:-translate-x-0 transition h-full p-6 bg-white flex-col lg:flex-row lg:items-center lg:justify-center gap-3 lg:gap-10`}
      >

        {navigationData.map((nav, index) => (
          <li key={index} className='lg:py-4 border-b-1 cursor-pointer p-1 
            transition duration-300 rounded-sm border-gray-200 lg:after relative group'
            onClick={() => DropdownToggle(index)}
          >
            {nav.type === "link" && (
              <div className='flex items-center justify-between flex-nowrap'>
                <Link to={nav.path}>{nav.title}</Link>
                <span className='lg:hidden'><MdArrowForward /></span>
              </div>
            )}
            {/* Mega Menu */}
            {nav.type === "mega-menu" && (
              <>
                {nav.title}
                <div className="grid rounded-md invisible lg:group-hover:visible transition-all duration-200
                  ease-in-out opacity-0 group-hover:opacity-100 grid-cols-4 gap-[30px] absolute 
                  w-[88vw] group-hover:top-14 -left-[21.5vw] top-30 bg-white p-10 z-50 
                  border border-gray-200 shadow-xl shadow-[#0a0a0a35]">
                  {nav.columns.map((col, idx) => (
                    <ul key={idx} className="flex flex-col gap-2">
                      <li className="border-b-1 border-gray-400 pb-3 font-bold">{col.heading}</li>
                      {col.items.map((item, i) => (
                        <li key={i} className="text-gray-500 pink">{item}</li>
                      ))}
                      <li><img className='rounded-md' src={col.img} width="250" height="119" alt={col.heading} /></li>
                    </ul>
                  ))}
                </div>
              </>
            )}

            {nav.type === "dropdown" && (
              <>
                {nav.title}
                <ul className={`lg:absolute ${activeIdx === index ? 'visible max-h-40 duration-500' : 'max-h-0 duration-600 invisible'} transition p-1 lg:p-4 lg:max-h-none lg:h-auto dropdown-menu top-30  lg:group-hover:visible group-hover:opacity-100 group-hover:top-14  shadow-md lg:border-1 border-gray-200`}>
                  {nav.items.map((item, i) => (
                    <li key={i} className='opacity-70 pink'>{item}</li>
                  ))}
                </ul>
                <span className='absolute right-1 top-0 text-black lg:hidden'>{activeIdx === index ? <MdArrowDropUp /> : <MdArrowDropDown />}</span>
              </>
            )}
            {/* Simple Menu Item */}
            {nav.type === "simple" && (
              <>
                {nav.title}
                <span className='absolute right-1 top-0 text-black lg:hidden'><MdArrowDropDown /></span>
              </>
            )}
          </li>
        ))}
        <ul className='flex items-center space-x-1 lg:invisible absolute left-15 bottom-10 h-24 max-w-6xl'>
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
      </ul>
    </div>
  )
}

export default NavigationBar
