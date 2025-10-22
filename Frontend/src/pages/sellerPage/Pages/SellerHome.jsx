import React, { useEffect } from 'react'
import SideBar from '../Component/SideBar'
import { Outlet } from 'react-router-dom'
import AddNewProduct from './AddNewProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../Redux&Toolkit/Slice/authSlice'

function SellerHome() {
  const { productpopup } = useSelector(state => state.menu)
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (status !== "success") {
      dispatch(fetchUser());
    }

    if (productpopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [productpopup]);
  return (
    <div className='px-5 w-full sm:px-24 min-h-[80vh] py-5 grid grid-cols-1 md  :grid-cols-[220px_1fr] gap-3'>
      {productpopup && <AddNewProduct />}
      <SideBar />
      <Outlet />
    </div>
  )
}

export default SellerHome