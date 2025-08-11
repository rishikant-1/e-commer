import React from 'react'
import { Link } from 'react-router-dom'
import paymentImg from '../../../assets/payment.png'

function Footer() {
  return (
    <div className='h-auto bg-[#212121] mt-10'>
      <div className='px-14 md:px-24 flex flex-col gap-3 py-12'>
        <h1 className='text-xl font-semibold text-[#ff7979]'>Brand directory</h1>
        <div className='flex flex-wrap items-center gap-3 text-[#787878]'>
          <b className='uppercase' >Fashion :</b>
          <Link className='gray' to="#">T-shirt</Link>
          <Link className='gray' to="#">Shirts</Link>
          <Link className='gray' to="#">shorts & jeans</Link>
          <Link className='gray' to="#">jacket</Link>
          <Link className='gray' to="#">dress & frock</Link>
          <Link className='gray' to="#">innerwear</Link>
          <Link className='gray' style={{borderRight: "none"}} to="#">hosiery</Link>
        </div>
        <div className='flex flex-wrap items-center gap-3 text-[#787878]'>
          <b className='uppercase' >footwear :</b>
          <Link className='gray' to="#">sport</Link>
          <Link className='gray' to="#">formal</Link>
          <Link className='gray' to="#">Boots</Link>
          <Link className='gray' to="#">casual</Link>
          <Link className='gray' to="#">cowboy shoes</Link>
          <Link className='gray' to="#">safety shoes</Link>
          <Link className='gray' to="#">Party wear shoes</Link>
          <Link className='gray' to="#">Firstcopy</Link>
          <Link className='gray' to="#">Branded</Link>
          <Link className='gray' style={{borderRight: "none"}} to="#">Long shoes</Link>
        </div>
        <div className='flex flex-wrap items-center gap-3 text-[#787878]'>
          <b className='uppercase' >jewellery :</b>
          <Link className='gray' to="#">Earrings</Link>
          <Link className='gray' to="#">Couple rings</Link>
          <Link className='gray' to="#">Pendants</Link>
          <Link className='gray' to="#">Crystal</Link>
          <Link className='gray' to="#">Bangles</Link>
          <Link className='gray' to="#">bracelets</Link>
          <Link className='gray' to="#">nosepin</Link>
          <Link className='gray' to="#">chain</Link>
          <Link className='gray' to="#">Earrings</Link>
          <Link className='gray' style={{borderRight: "none"}} to="#">Couple rings</Link>
        </div>
        <div className='flex flex-wrap items-center gap-3 text-[#787878]'>
          <b className='uppercase' >cosmetics :</b>
          <Link className='gray' to="#">Shampoo</Link>
          <Link className='gray' to="#">Bodywash</Link>
          <Link className='gray' to="#">Facewash</Link>
          <Link className='gray' to="#">makeup kit</Link>
          <Link className='gray' to="#">liner</Link>
          <Link className='gray' to="#">lipstick</Link>
          <Link className='gray' to="#">prefume</Link>
          <Link className='gray' to="#">Body soap</Link>
          <Link className='gray' to="#">scrub</Link>
          <Link className='gray' to="#">hair gel</Link>
          <Link className='gray' to="#">hair colors</Link>
          <Link className='gray' to="#">hair dye</Link>
          <Link className='gray' to="#">sunscreen</Link>
          <Link className='gray' style={{borderRight: "none"}} to="#">skin loson</Link>
        </div>
      </div>
      
      <div className='border border-gray-600 px-14 md:px-24 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <ul className='flex flex-col gap-2'>
          <b className='text-white border-b py-1 mb-3 border-[#ff7979]'>Popular Categories</b>
          <li className='pink text-[#9e9e9e]'><Link to="#">Fashion</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Electronics</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Cosmetic</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Health</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Watches</Link></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <b className='text-white border-b py-1 mb-3 border-[#ff7979]'>Products</b>
          <li className='pink text-[#9e9e9e]'><Link to="#">Launch Products</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">New products</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Best sales</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Trending Items</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Clothes</Link></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <b className='text-white border-b py-1 mb-3 border-[#ff7979]'>Our Company</b>
          <li className='pink text-[#9e9e9e]'><Link to="#">Delivery</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Legal Notice</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Terms and conditions</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">About Us</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Secure Payment</Link></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <b className='text-white border-b py-1 mb-3 border-[#ff7979]'>Services</b>
          <li className='pink text-[#9e9e9e]'><Link to="#">Price Drop</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">New Product</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Best Sales</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Contact Us</Link></li>
          <li className='pink text-[#9e9e9e]'><Link to="#">Sitemap</Link></li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <b className='text-white border-b py-1 mb-3 border-[#ff7979]'>Contact</b>
          <li className='text-[#9e9e9e]'>419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</li>
          <li className='pink text-[#9e9e9e]'>pankajraj00517@gmail.com</li>
          <li className='pink text-[#9e9e9e]'>pankajraj00517@gmail.com</li>
        </ul>
      </div>
      <div className='flex flex-col justify-end items-center w-full pt-12 md:pb-0 pb-20'>
        <img src={paymentImg} alt="payment image" />
        <p className='text-white opacity-70 text-lg tracking-wider mt-3'>Copyright © Anon all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer