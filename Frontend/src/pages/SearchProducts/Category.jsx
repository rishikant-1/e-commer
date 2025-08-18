import React from 'react'

function Category() {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow h-screen">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer pink">All</li>
        <li className="cursor-pointer pink">Cloths</li>
        <li className="cursor-pointer pink">Electronics</li>
        <li className="cursor-pointer pink">Gadgets</li>
      </ul>
    </div>
  )
}

export default Category