import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterProductByCategory, getAllProduct } from '../../Redux&Toolkit/Slice/searchSlice';

function Category() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);
  const handleCategory = (e) => {
    dispatch(filterProductByCategory(e.target.innerText));
  }
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow h-screen">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li onClick={()=>dispatch(getAllProduct())} className="cursor-pointer pink">All</li>
        
        {products.map((d)=>(
          <li key={d._id} onClick={(e)=>handleCategory(e)} className="cursor-pointer pink">{d?.category}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category