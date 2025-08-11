import React, { useEffect, useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import img1 from '../../../assets/icons/dress.svg';
import img2 from '../../../assets/icons/shoes.svg';
import img3 from '../../../assets/icons/jewelry.svg';
import img4 from '../../../assets/icons/perfume.svg';
import img5 from '../../../assets/icons/cosmetics.svg';
import img6 from '../../../assets/icons/glasses.svg';
import img7 from '../../../assets/icons/bag.svg';

import BestSellerImg1 from '../../../assets/products/1.jpg';
import BestSellerImg2 from '../../../assets/products/2.jpg';
import BestSellerImg3 from '../../../assets/products/3.jpg';
import BestSellerImg4 from '../../../assets/products/4.jpg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { categoryMenuPopup } from '../../../Redux&Toolkit/Slice/menuSlice';




function Sidebar() {
  const category = [
    {
      img: img1,
      name: 'Cloths',
      sub: [
        { itemName: "Shirt", qty: 300 },
        { itemName: "Shorts & Jeans", qty: 60 },
        { itemName: "Jacket", qty: 27 },
        { itemName: "Dress & Frock", qty: 262 },
      ]
    },
    {
      img: img2,
      name: 'Footwear',
      sub: [
        { itemName: "Sports", qty: 40 },
        { itemName: "Formal", qty: 76 },
        { itemName: "Casual", qty: 37 },
        { itemName: "Safety Shoes", qty: 26 },
      ]
    },
    {
      img: img3,
      name: 'Jewelry',
      sub: [
        { itemName: "Earring", qty: 56 },
        { itemName: "Couple Rings", qty: 16 },
        { itemName: "Neckless", qty: 27 },
      ]
    },
    {
      img: img4,
      name: 'Perfumes',
      sub: [
        { itemName: "Clothes Perfume", qty: 32 },
        { itemName: "Deoderant", qty: 60 },
        { itemName: "Fog", qty: 27 },
        { itemName: "Ringer", qty: 22 },
      ]
    },
    {
      img: img5,
      name: 'Cosmetics',
      sub: [
        { itemName: "Shampoo", qty: 200 },
        { itemName: "Sunscreen", qty: 60 },
        { itemName: "Body Wash ", qty: 27 },
        { itemName: "Makeup kit", qty: 26 },
      ]
    },
    {
      img: img6,
      name: 'Glasses',
      sub: [
        { itemName: "Sunglasses", qty: 40 },
        { itemName: "Lenses", qty: 59 },
      ]
    },
    {
      img: img7,
      name: 'Bags',
      sub: [
        { itemName: "SHoping Bag", qty: 386 },
        { itemName: "Gym Bagpack", qty: 63 },
        { itemName: "Purse", qty: 27 },
        { itemName: "Wallet", qty: 22 },
      ]
    },
  ]

  const BestSellerItem = [
    { img: BestSellerImg1, rating: 5, title: "baby fabric shoes", discountedPrice: 4, price: 5 },
    { img: BestSellerImg2, rating: 5, title: "men's hoodies t-shirt", discountedPrice: 8, price: 17 },
    { img: BestSellerImg3, rating: 4, title: "girls t-shirt", discountedPrice: 9, price: 16 },
    { img: BestSellerImg4, rating: 3, title: "woolen hat for men", discountedPrice: 16, price: 26 },
  ]
  const [openIndex, setOpenIndex] = useState(null)
  const dispatch = useDispatch()
  const dropdownToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const { popup } = useSelector(state => state.menu)


  return (
    <>
      {popup && <span onClick={() => dispatch(categoryMenuPopup(false))} className={`overlay  ${popup && 'opacity-100 duration-300 visible'} invisible opacity-0`}></span>}
      <div className={`fixed ${popup && 'opacity-100 duration-800 px-6 translate-x-0 h-screen'} lg:translate-x-0 transition opacity-0 bg-white z-40 top-0 left-0 -translate-x-full lg:relative lg:block lg:px-0 lg:opacity-100 h-auto`}>
        <div className='border-1 border-gray-200 rounded-md p-5'>
          <h1 className='font-bold text-md opacity-70 mb-5'>CATEGORY</h1>
          {/* dropdown */}
          <div className='flex flex-col text-[15px] md:text-[18px] md:gap-3 gap-2 font-semibold'>
            {category.map((items, index) => {
              return (
                <div key={index} className="flex flex-col justify-center cursor-pointer">
                  <div className='flex items-center justify-between' onClick={() => dropdownToggle(index)}>
                    <div className='flex items-center gap-3'>
                      <img className="h-5" src={items.img} alt="cloths" />
                      <p className='opacity-60 font-sans text-md'>{items.name}</p>
                    </div>
                    {/* dropdown icon */}
                    {openIndex === index ? <MdArrowDropUp className='opacity-50' size={"25px"} /> : <MdArrowDropDown className='opacity-50' size={"25px"} />}
                  </div>
                  {/* subdropdown */}
                  <ul className={`w-full -bottom-10 left-0 lg:mt-1 px-2 ${openIndex === index ? 'open' : ''} dropdown`}>
                    {items.sub.map((subItem, idx) => {
                      return (
                        <li key={idx}
                          className='flex items-center w-full pink justify-between opacity-40'
                        >
                          <p className='text-[1rem] font-sans'>{subItem.itemName}</p>
                          <p className='text-[1rem] text-black'>{subItem.qty}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
        <div className='best-seller py-6'>
          <h1 className='text-xl font-semibold opacity-90'>Best Sellers</h1>
          <div className='flex flex-col gap-2 md:gap-3 mt-3'>
            {BestSellerItem.map((item, idx) => {
              return (
                <div key={idx} className='flex items-center gap-2 rounded-md border-1 border-gray-200 cursor-pointer'>
                  <img className='p-1 h-15 md:h-24 rounded-md' src={item.img} alt={item.title} />
                  <div className='flex flex-col'>
                    <p className='text-[1rem] md:text-[1.2rem] truncate w-42 opacity-70'>{item.title}</p>
                    <div className='flex items-center'>
                      {
                        Array(5).fill(item.rating).map((_, index) => (
                          <FaStar key={index} size={"13px"} color={index < item.rating ? "#ffbe00" : "#C0C0C0"} />
                        ))
                      }
                    </div>
                    <div className='flex items-center gap-3'>
                      <p className='opacity-60 text-sm line-through'>${item.price}.00</p>
                      <p className='opacity-90'>${item.discountedPrice}.00</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar