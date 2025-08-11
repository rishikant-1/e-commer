import React from 'react'
import HeaderTop from '../components/common/HeaderTop/HeaderTop.jsx'
import Slider from '../components/Home/Slider.jsx'
import CategorySeasonItem from '../components/Home/CategorySeasonItem.jsx'
import ProductShowCase from '../components/Home/Minimal-Products/ProductShowCase.jsx'
import Testimonials from '../components/Home/Testimonials.jsx'
import Blog from '../components/Home/Blog/Blog.jsx'
import Footer from '../components/common/Footer/Footer.jsx'


function Home() {
  
  return (
    <div className=''>
      <HeaderTop />
      <div className='w-auto px-[6vw]'>
        <Slider />
        <CategorySeasonItem />
        <ProductShowCase />
        <Testimonials />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default Home