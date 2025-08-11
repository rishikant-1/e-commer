import React from 'react'
import img from '../../../assets/blog-1.jpg'


function BlogCard({blog}) {
  return (
    <div className='w-[355px] sm:w-[16rem] md:w-[20rem] lg:w-[19.8rem]'>
      <img className='rounded-md bg-cover' src={blog.img} alt="" />
      <div className='py-2'>
        <p className='text-sm text-[#df7979]'>{blog.category}</p>
        <h3 className='text-lg pink opacity-85 font-semibold'>{blog.title}</h3>
        <p className='opacity-70'>{blog.createdBy} / {blog.createdAt}</p>
      </div>
    </div>
  )
}

export default BlogCard