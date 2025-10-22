import React from 'react'
import Sidebar from './Sidebar'
import MinimalProducts from './MinimalProducts'
import ProductMain from './ProductMain'
import ProductFeature from './ProductFeature'
import {Link} from 'react-router-dom'

function ProductShowCase() {
  return (
    <section className='w-full gap-3 grid grid-cols-1 lg:grid-cols-[310px_1fr] lg:h-[118vh]'>
      <Sidebar />
      <div className='rounded-md overflow-x-hidden lg:overflow-y-scroll w-full'>
        <MinimalProducts />  
        <ProductFeature />  
        <ProductMain />  
        <Link to='/products' className='float-right underline mr-8 hover:text-blue-500'>View all</Link>
      </div>
    </section>
  )
}

export default ProductShowCase