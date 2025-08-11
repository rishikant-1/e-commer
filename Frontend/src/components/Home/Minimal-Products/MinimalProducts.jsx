import clothes1 from '../../../assets/products/clothes-1.jpg';
import clothes2 from '../../../assets/products/clothes-2.jpg';
import clothes3 from '../../../assets/products/clothes-3.jpg';
import shirt1 from '../../../assets/products/shirt-1.jpg';
import jacket5 from '../../../assets/products/jacket-5.jpg';
import jacket1 from '../../../assets/products/jacket-1.jpg';
import jacket3 from '../../../assets/products/jacket-3.jpg';
import shorts1 from '../../../assets/products/shorts-1.jpg';

import sports1 from '../../../assets/products/sports-1.jpg';
import sports2 from '../../../assets/products/sports-2.jpg';
import partyWear1 from '../../../assets/products/party-wear-1.jpg';
import sports3 from '../../../assets/products/sports-3.jpg';
import sports6 from '../../../assets/products/sports-6.jpg';
import shoe3 from '../../../assets/products/shoe-3.jpg';
import shoe1 from '../../../assets/products/shoe-1.jpg';
import shoe2 from '../../../assets/products/shoe-2.jpg';

import watch3 from '../../../assets/products/watch-3.jpg';
import jewellery3 from '../../../assets/products/jewellery-3.jpg';
import perfume from '../../../assets/products/perfume.jpg';
import belt from '../../../assets/products/belt.jpg';
import jewellery2 from '../../../assets/products/jewellery-2.jpg';
import watch1 from '../../../assets/products/watch-1.jpg';
import shampoo from '../../../assets/products/shampoo.jpg';
import jewellery1 from '../../../assets/products/jewellery-1.jpg';


function MinimalProducts() {

  const productsData = {
    newArrivals: [
      { src: clothes1, title: "Relaxed Short Full Sleeve T-Shirt", category: "Clothes", price: 45, discountedPrice: 12 },
      { src: clothes2, title: "Girls Pink Embro Design Top", category: "Clothes", price: 61, discountedPrice: 9 },
      { src: clothes3, title: "Black Floral Wrap Midi Skirt", category: "Clothes", price: 76, discountedPrice: 25 },
      { src: shirt1, title: "Pure Garment Dyed Cotton Shirt", category: "Mens Fashion", price: 68, discountedPrice: 31 },
      { src: jacket5, title: "MEN Yarn Fleece Full-Zip Jacket", category: "Winter Wear", price: 61, discountedPrice: 11 },
      { src: jacket1, title: "Mens Winter Leather Jackets", category: "Winter Wear", price: 32, discountedPrice: 20 },
      { src: jacket3, title: "Mens Winter Leather Jackets", category: "Jackets", price: 50, discountedPrice: 25 },
      { src: shorts1, title: "Better Basics French Terry Sweatshorts", category: "Shorts", price: 20, discountedPrice: 10 },
    ],
    trending: [
      { src: sports1, title: "Running & Trekking Shoes - White", category: "Sports", price: 49, discountedPrice: 15 },
      { src: sports2, title: "Trekking & Running Shoes - Black", category: "Sports", price: 78, discountedPrice: 36 },
      { src: partyWear1, title: "Womens Party Wear Shoes", category: "Party Wear", price: 94, discountedPrice: 42 },
      { src: sports3, title: "Sports Claw Women's Shoes", category: "Sports", price: 54, discountedPrice: 65 },
      { src: sports6, title: "Air Trekking Shoes - White", category: "Sports", price: 52, discountedPrice: 55 },
      { src: shoe3, title: "Boot With Suede Detail", category: "Boots", price: 20, discountedPrice: 30 },
      { src: shoe1, title: "Men's Leather Formal Wear Shoes", category: "Formal", price: 56, discountedPrice: 78 },
      { src: shoe2, title: "Casual Men's Brown Shoes", category: "Casual", price: 50, discountedPrice: 55 },
    ],
    topRated: [
      { src: watch3, title: "Pocket Watch Leather Pouch", category: "Watches", price: 50, discountedPrice: 34 },
      { src: jewellery3, title: "Silver Deer Heart Necklace", category: "Jewellery", price: 84, discountedPrice: 30 },
      { src: perfume, title: "Titan 100 ml Womens Perfume", category: "Perfume", price: 42, discountedPrice: 10 },
      { src: belt, title: "Men's Leather Reversible Belt", category: "Belt", price: 24, discountedPrice: 10 },
      { src: jewellery2, title: "Platinum Zircon Classic Ring", category: "Jewellery", price: 62, discountedPrice: 65 },
      { src: watch1, title: "Smart Watche Vital Plus", category: "Watches", price: 56, discountedPrice: 78 },
      { src: shampoo, title: "Shampoo Conditioner Packs", category: "Cosmetics", price: 20, discountedPrice: 30 },
      { src: jewellery1, title: "Rose Gold Peacock Earrings", category: "Jewellery", price: 20, discountedPrice: 30 },
    ],
  };

  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center'>
      <div className='px-2 max-w-xs'>
        <h1 className='font-semibold text-[1.1rem] opacity-80 border-b-1 border-gray-300 pb-3'>Trending</h1>
        <div className='over grid grid-cols-[290px_1fr] gap-4 overflow-x-scroll scroll-smooth snap-mandatory snap-x custom-scrollbar pt-8 pb-3'>
          {productsData.newArrivals.map((data, idx) => {
            return (
              <div key={idx} className='snap-start flex w-72 p-2 items-center overflow-hidden rounded-md border border-gray-200 cursor-pointer '>
                <img className='p-2 h-20 rounded-md' src={data.src} alt={data.title} />
                <div className='flex flex-col'>
                  <p className='font-medium whitespace-nowrap truncate w-45'>{data.title}</p>
                  <p className='text-[.9rem] pink opacity-50'>{data.category}</p>
                  <div className='flex items-center gap-2'>
                    <p className='text-[#ff8f9c] text-md'>${data.price}.00</p>
                    <p className='opacity-50 text-sm line-through'>${data.discountedPrice}.00</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='px-2 max-w-xs'>
        <h1 className='font-semibold text-[1.1rem] opacity-80 border-b-1 border-gray-300 pb-3'>Trending</h1>
        <div className='over grid grid-cols-[290px_1fr] gap-4 overflow-x-scroll scroll-smooth snap-mandatory snap-x custom-scrollbar pt-8 pb-3'>
          {productsData.trending.map((data, idx) => {
            return (
              <div key={idx} className='snap-start flex w-72 items-center overflow-hidden rounded-md border border-gray-200 cursor-pointer p-2'>
                <img className='p-2 h-20 rounded-md' src={data.src} alt={data.title} />
                <div className='flex flex-col'>
                  <p className='font-medium whitespace-nowrap truncate w-45'>{data.title}</p>
                  <p className='text-[.9rem] pink opacity-50'>{data.category}</p>
                  <div className='flex items-center gap-2'>
                    <p className='text-[#ff8f9c] text-md'>${data.price}.00</p>
                    <p className='opacity-50 text-sm line-through'>${data.discountedPrice}.00</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='px-2 max-w-xs'>
        <h1 className='font-semibold text-[1.1rem] opacity-80 border-b-1 border-gray-300 pb-3'>Top Rated</h1>
        <div className='over grid grid-cols-[290px_1fr] gap-4 overflow-x-scroll scroll-smooth snap-mandatory snap-x custom-scrollbar pt-8 pb-3'>
          {productsData.topRated.map((data, idx) => {
            return (
              <div key={idx} className='snap-start flex w-72 items-center overflow-hidden rounded-md border border-gray-200 cursor-pointer p-2'>
                <img className='p-2 h-20 rounded-md' src={data.src} alt={data.title} />
                <div className='flex flex-col'>
                  <p className='font-medium whitespace-nowrap truncate w-45'>{data.title}</p>
                  <p className='text-[.9rem] pink opacity-50'>{data.category}</p>
                  <div className='flex items-center gap-2'>
                    <p className='text-[#ff8f9c] text-md'>${data.price}.00</p>
                    <p className='opacity-50 text-sm line-through'>${data.discountedPrice}.00</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MinimalProducts