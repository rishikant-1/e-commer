import React from 'react'
import TopNav from './TopNav'
import SearchNav from './SearchNav'
import NavigationBar from './NavigationBar'
import { useLocation } from 'react-router-dom'

function HeaderTop() {
  const location = useLocation()
  return (
    <div className='w-full'>
      <TopNav />  
      <SearchNav />
      {location.pathname !== '/products' || '/seller-page'  && <NavigationBar /> }
    </div>
  )
}

export default HeaderTop