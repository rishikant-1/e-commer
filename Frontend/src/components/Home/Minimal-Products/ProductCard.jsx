import React from 'react'
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";

function ProductCard({ products }) {

  return (
    <div className='flex flex-col max-w-3xs h-85 gap-1 rounded-md hover:shadow-xl shrink-0 transition
     duration-300 items-center justify-center group relative overflow-hidden border-1 
     border-gray-200'>
      <img className='rounded-t-md' src={products.defaultImg} alt="img" />
      <img className='rounded-t-md scale-110 absolute top-0 left-0 opacity-0 
      hover:opacity-100 w-full'
        src={products.hoverImg} alt="img" />

      <div className='absolute top-3 right-3 flex flex-col justify-center opacity-0 
      group-hover:opacity-100 gap-2'>

        <span className='rounded-full bg-gray-100 transition duration-300 hover:bg-[#ff7979ad] cursor-pointer p-2'>
          <IoHeartOutline size={'20px'} />
        </span>
        <span className='rounded-full bg-gray-100 transition duration-300 hover:bg-[#ff7979ad] cursor-pointer p-2'>
          <IoEyeOutline size={'20px'} />
        </span>
        <span className='rounded-full bg-gray-100 transition duration-300 hover:bg-[#ff7979ad] cursor-pointer p-2'>
          <IoRepeatOutline size={'20px'} />
        </span>
        <span className='rounded-full bg-gray-100 transition duration-300 hover:bg-[#ff7979ad] cursor-pointer p-2'>
          <IoBagAddOutline size={'20px'} />
        </span>
      </div>

      <div className='w-full flex flex-col items-start gap-.5 p-3'>
        <b className='text-[#000] opacity-70'>{products.category}</b>
        <p className='opacity-50 hover:opacity-80 tarnsition duration-300 truncate w-45'>
          {products.title}
        </p>
        <div className='flex items-center justify-end py-2 opacity-70'>
          {
            Array(5).fill(products.rating).map((_, idx) => (
              idx < Math.floor(products.rating) ? 
              <IoStar color='#fbb21e' key={idx} /> : 
              <IoStarOutline color='#fbb21e' key={idx} />
            ))
          }
          <span className='text-sm px-1'>({products.rating})rating</span>
        </div>
        <div className='flex items-center gap-3'>
          <p className='font-bold'>${products.discountedPrice}.00</p>
          <p className='line-through opacity-50'>${products.price}.00</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard