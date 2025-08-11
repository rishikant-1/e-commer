import React from 'react'
import testimonial from '../../assets/testimonial-1.jpg'
import quotes from '../../assets/icons/quotes.svg'
import ctsBanner from '../../assets/cta-banner.jpg'

function Testimonials() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_60%] lg:grid-cols-[1fr_50%_1fr] gap-5 mt-20'>
      <div>
        <h1 className='border-b-1 border-gray-200 pb-3 pt-2 font-bold'>Testimonial</h1>
        <div className='flex flex-col mt-6 px-5 py-8 justify-center items-center gap-3 border-1 border-gray-200'>
          <img className='h-18 w-18 rounded-full' src={testimonial} alt="testimonials" />
          <h3 className='font-bold text-lg opacity-50'>Alan Doe</h3>
          <p className='text-md opacity-80'>CEO & Founder Invision</p>
          <img className='h-8' src={quotes} alt="" />
          <p className='text-md opacity-60 max-w-45 text-center'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</p>
        </div>
      </div>
      <div className='h-full w-full bg-cover flex items-center justify-center rounded-md' 
      style={{backgroundImage: `url(${ctsBanner})`}}>
        <div className='flex flex-col py-8 px-20 rounded-md items-center justify-center gap-4 bg-[#ffffffbf]'>
          <button className='py-2 px-4 bg-zinc-900 text-white font-bold rounded-md'>25% Discount</button>
          <h2 className='text-3xl font-bold text-center opacity-70'>Summer <br/> Collection</h2>
          <p className='opacity-70 text-lg pink'>Starting @ 10$</p>
          <b className='opacity-60 text-xl'>SHOP NOW</b>
        </div>
      </div>
      <div>
        <h1 className='border-b-1 border-gray-200 pb-3 pt-2 font-bold'>Our Services</h1>
        <ul className='mt-6 p-8 border border-gray-200 rounded-md flex flex-col gap-5'>
          <li className=''>
            <p className='font-semibold opacity-60'>Worldwide Delivery</p>
            <p className='opacity-70 text-sm'>For Order Over $100</p>
          </li>
          <li className=''>
            <p className='font-semibold opacity-60'>Worldwide Delivery</p>
            <p className='opacity-70 text-sm'>For Order Over $100</p>
          </li>
          <li className=''>
            <p className='font-semibold opacity-60'>Worldwide Delivery</p>
            <p className='opacity-70 text-sm'>For Order Over $100</p>
          </li>
          <li className=''>
            <p className='font-semibold opacity-60'>Worldwide Delivery</p>
            <p className='opacity-70 text-sm'>For Order Over $100</p>
          </li>
          <li className=''>
            <p className='font-semibold opacity-60'>Worldwide Delivery</p>
            <p className='opacity-70 text-sm'>For Order Over $100</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials