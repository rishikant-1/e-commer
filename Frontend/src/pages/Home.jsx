import React, { useEffect } from 'react'
import Slider from '../components/Home/Slider.jsx'
import CategorySeasonItem from '../components/Home/CategorySeasonItem.jsx'
import ProductShowCase from '../components/Home/Minimal-Products/ProductShowCase.jsx'
import Testimonials from '../components/Home/Testimonials.jsx'
import Blog from '../components/Home/Blog/Blog.jsx'


function Home() {

  
  return (
    <div className='w-auto px-[6vw]'>
      <Slider />
      <CategorySeasonItem />
      <ProductShowCase />
      <Testimonials />
      <Blog />
    </div>
  )
}

export default Home