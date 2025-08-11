import React from 'react'
import img1 from '../../../assets/products/shampoo.jpg'
import img2 from '../../../assets/products/jewellery-1.jpg'

function ProductFeature() {

  const featureProduct = [
    {
      image: img1,
      title: "shampoo, conditioner & facewash packs",
      price: 200,
      discount: 150,
      availableItem: 40,
      soldItem: 20,
      description: 'Complete hair and skin care combo. Keeps you fresh and nourished daily.'
    },
    {
      image: img2,
      title: "Rose Gold diamonds Earring",
      price: 2000,
      discount: 1990,
      availableItem: 71,
      soldItem: 207,
      description: "Elegant rose gold earrings.Beautifully studded with sparkling diamonds for timeless charm."
    }
  ]
  return (
    <div className='w-full grid gap-4 grid-cols-[100%_100%] custom-scrollbar overflow-x-scroll scroll-smooth snap-mandatory snap-x'>
      {featureProduct.map((item, index) => (
        <div key={index} className='snap-start grid lg:grid-cols-[50%_1fr] grid-cols-1 sm:grid-cols-2'>
          <img className='p-5 min-w-[20rem]' src={item.image} alt={item.title} />
          <div className='flex flex-col gap-2 py-5'>
            <h3 className='text-lg opacity-85 font-semibold uppercase'>{item.title}</h3>
            <p className='opacity-50'>{item.description}</p>
            <div className='flex items-center gap-5 py-2'>
              <p className='text-2xl font-bold text-[#ff8f9c]'>${item.price}.00</p>
              <p className='text-2xl line-through opacity-60'>${item.discount}.00</p>
            </div>
            <button className='py-2 px-4 text-white w-45 hover:bg-zinc-900 rounded-md text-lg font-bold bg-[#ff8f9c]'>ADD TO CART</button>
            <div className='flex items-center justify-between mt-5'>
              <p className='uppercase text-md opacity-80'>Allready Sold: {item.soldItem}</p>
              <p className='uppercase text-md opacity-80'>Available: {item.availableItem}</p>
            </div>
            <div className='flex h-3 px-1 items-center max-w-50% bg-gray-200 rounded-full'>
              <span className='h-1.5 bg-[#ff8f9c] w-[50%] rounded-full'></span>
            </div>
            <p>Hurry Up! Offer ends in:</p>
            <div className='flex items-center gap-6'>
              <div className='bg-gray-200 rounded-md flex flex-col p-2 w-18 h-18 items-center justify-center'>
                <p className='text-2xl'>364</p>
                <p className='text-sm'>Days</p>
              </div>
              <div className='bg-gray-200 rounded-md flex flex-col p-2 w-18 h-18 items-center justify-center'>
                <p className='text-2xl'>23</p>
                <p className='text-sm'>hours</p>
              </div>
              <div className='bg-gray-200 rounded-md flex flex-col p-2 w-18 h-18 items-center justify-center'>
                <p className='text-2xl'>59</p>
                <p className='text-sm'>Min</p>
              </div>
              <div className='bg-gray-200 rounded-md flex flex-col p-2 w-18 h-18 items-center justify-center'>
                <p className='text-2xl'>00</p>
                <p className='text-sm'>Sec</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductFeature