import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'
import { Link } from 'react-router-dom'
import { fetchAllProduct } from '../../Redux&Toolkit/Slice/searchSlice'
import { useDispatch } from 'react-redux'

function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = 8;
  const lastInadex = currentPage * dataPerPage;
  const firstIndex = lastInadex - dataPerPage;


  const dispatch = useDispatch()
  const { shortedProducts } = useSelector(state => state.product)
 
  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [])
  
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 px-4 md:px-12 lg:px-24 py-8">
      <Category />
      <div className="w-full" >
        <h1 className='text-3xl pb-3'>Products</h1>
       {fetchAllProduct && <p className='text-2xl text-center my-20 opacity-40 font-bold'>product not found</p>}
        {shortedProducts.slice(firstIndex, lastInadex).map((item) => (
          <div key={item._id} className="h-fit flex w-full mb-3 gap-6 bg-white border-1 border-gray-200 rounded-md">
            <div className='h-40 sm:h-55 min-w-38 p-1 bg-cover'>
              <img className="h-full w-full rounded-md" src={item?.thumbnail?.url} alt="image" />
            </div>
            <div className="w-full">
              <div className="flex-col justify-between items-start w-full">
                <p className="max-w-md text-[1.3rem] tracking-tight md:text-[1.5rem] font-sans">{item?.title}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-gray-500">₹2,999</span>
                  <span className="text-lg font-bold text-black">₹{item?.price?.basePrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-md text-xs">-63%</span>
                </div>
                <p className="text-green-500 text-sm">In Stock</p>
                <p className="text-[#531414] rounded-md opacity-70 font-bold">{item?.category}</p>
              </div>
              <p className="opacity-70 tracking-tight text-nowrap">Eligible for FREE Shipping</p>
              <div className="flex items-center gap-3 text-nowrap flex-wrap">
                <button className="border-none pink h-8 text-[#2162a1] hover:underline text-sm">Save for later</button>
                <Link className="border-none pink text-[#2162a1] hover:underline text-sm">See more review</Link>
              </div>
              <button className="mt-3 bg-red-300 text-white py-1 px-3  rounded-lg hover:bg-red-400 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        <div className='flex items-center justify-end gap-2'>
          {
           Array(Math.ceil(shortedProducts.length / dataPerPage)).fill("1").map((_, idx)=>{
            return <p key={idx} onClick={()=>setCurrentPage(idx+1)} className='px-2 py-1 bg-gray-200 rounded-md cursor-pointer'>{idx+1}</p>
           })
          }
        </div>
      </div>

    </div>
  )
}

export default Products
