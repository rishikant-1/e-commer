import React from 'react'
import SideBar from '../Component/SideBar'
import {Outlet} from 'react-router-dom'

function SellerHome() {
  return (
    <div className='px-24 min-h-[80vh] py-5 grid grid-cols-[220px_1fr] gap-3'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default SellerHome