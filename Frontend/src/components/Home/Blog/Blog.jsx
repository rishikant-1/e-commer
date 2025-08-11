import React from 'react';
import BlogCard from './BlogCard';
import blog1 from '../../../assets/blog-1.jpg';
import blog2 from '../../../assets/blog-2.jpg';
import blog3 from '../../../assets/blog-3.jpg';
import blog4 from '../../../assets/blog-4.jpg';

const blogs = [
  {
    img: blog1,
    createdBy: 'By Mr Admin',
    createdAt: 'Apr 06, 2025',
    title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
    category: 'Fashion'
  },
  {
    img: blog2,
    createdBy: 'By Mr Robin',
    createdAt: 'Jan 18, 2023',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Clothes'
  },
  {
    img: blog3,
    createdBy: 'By Mr Selsa',
    createdAt: 'Feb 10, 2022',
    title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
    category: 'Shoes'
  },
  {
    img: blog4,
    createdBy: 'By Mis Alis',
    createdAt: 'Jan 16, 2025',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Electronics'
  },
];

function Blog() {
  return (
    <div className='flex items-center lg:justify-center shrink-0 gap-6 mt-10 h-96 overflow-x-scroll scroll-smooth snap-mandatory snap-x'>
      {blogs.map((data, idx) => (
        <div key={idx} className='snap-start'>
          <BlogCard blog={data} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
