import React from 'react'
import ProductCard from './ProductCard'
import jacket3 from '../../../assets/products/jacket-3.jpg';
import jacket4 from '../../../assets/products/jacket-4.jpg';
import shirt1 from '../../../assets/products/shirt-1.jpg';
import shirt2 from '../../../assets/products/shirt-2.jpg';
import jacket5 from '../../../assets/products/jacket-5.jpg';
import jacket6 from '../../../assets/products/jacket-6.jpg';
import clothes3 from '../../../assets/products/clothes-3.jpg';
import clothes4 from '../../../assets/products/clothes-4.jpg';
import shoe2 from '../../../assets/products/shoe-2.jpg';
import shoe2_1 from '../../../assets/products/shoe-2_1.jpg';
import watch3 from '../../../assets/products/watch-3.jpg';
import watch4 from '../../../assets/products/watch-4.jpg';
import watch1 from '../../../assets/products/watch-1.jpg';
import watch2 from '../../../assets/products/watch-2.jpg';
import partyWear1 from '../../../assets/products/party-wear-1.jpg';
import partyWear2 from '../../../assets/products/party-wear-2.jpg';
import jacket1 from '../../../assets/products/jacket-1.jpg';
import jacket2 from '../../../assets/products/jacket-2.jpg';
import sports2 from '../../../assets/products/sports-2.jpg';
import sports4 from '../../../assets/products/sports-4.jpg';
import shoe1 from '../../../assets/products/shoe-1.jpg';
import shoe1_1 from '../../../assets/products/shoe-1_1.jpg';
import shorts1 from '../../../assets/products/shorts-1.jpg';
import shorts2 from '../../../assets/products/shorts-2.jpg';


const productsData = [
  {
    defaultImg: jacket3,
    hoverImg: jacket4,
    title: "Mens Winter Leather Jacket",
    category: "Winter Wear",
    price: 120,
    discountedPrice: 90,
    rating: 4.5,
    badge: "Sale",
  },
  {
    defaultImg: shirt1,
    hoverImg: shirt2,
    title: "Pure Garment Dyed Cotton Shirt",
    category: "Men's Fashion",
    price: 80,
    discountedPrice: 60,
    rating: 4.2,
    badge: "Sale",
  },
  {
    defaultImg: jacket5,
    hoverImg: jacket6,
    title: "MEN Yarn Fleece Full-Zip Jacket",
    category: "Winter Wear",
    price: 100,
    discountedPrice: 75,
    rating: 3.8,
  },
  {
    defaultImg: clothes3,
    hoverImg: clothes4,
    title: "Black Floral Wrap Midi Skirt",
    category: "Women's Fashion",
    price: 70,
    discountedPrice: 50,
    rating: 4.7,
    badge: "Sale",
  },
  {
    defaultImg: shoe2,
    hoverImg: shoe2_1,
    title: "Casual Men's Brown Shoes",
    category: "Footwear",
    price: 90,
    discountedPrice: 65,
    rating: 4.0,
  },
  {
    defaultImg: watch3,
    hoverImg: watch4,
    title: "Pocket Watch Leather Pouch",
    category: "Accessories",
    price: 60,
    discountedPrice: 40,
    rating: 3.9,
  },
  {
    defaultImg: watch1,
    hoverImg: watch2,
    title: "Smart Watch Vital Plus",
    category: "Accessories",
    price: 110,
    discountedPrice: 85,
    rating: 4.3,
    badge: "Sale",
  },
  {
    defaultImg: partyWear1,
    hoverImg: partyWear2,
    title: "Women's Party Wear Shoes",
    category: "Footwear",
    price: 95,
    discountedPrice: 70,
    rating: 4.6,
  },
  {
    defaultImg: jacket1,
    hoverImg: jacket2,
    title: "Mens Winter Leather Jackets",
    category: "Winter Wear",
    price: 125,
    discountedPrice: 95,
    rating: 4.1,
  },
  {
    defaultImg: sports2,
    hoverImg: sports4,
    title: "Trekking & Running Shoes - Black",
    category: "Sports",
    price: 85,
    discountedPrice: 60,
    rating: 4.4,
    badge: "Sale",
  },
  {
    defaultImg: shoe1,
    hoverImg: shoe1_1,
    title: "Men's Leather Formal Wear Shoes",
    category: "Footwear",
    price: 100,
    discountedPrice: 75,
    rating: 4.0,
  },
  {
    defaultImg: shorts1,
    hoverImg: shorts2,
    title: "Better Basics French Terry Sweatshorts",
    category: "Casual Wear",
    price: 55,
    discountedPrice: 40,
    rating: 2.7,
  },
];


function ProductMain() {
  return (
    <div className='w-full h-auto py-5'>
      <h1 className='py-3 text-xl font-bold opacity-75 border-b-1 border-gray-200'>New Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 h-full mt-5'>
        {productsData.map((product, index) => (
          <ProductCard key={index} products={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductMain