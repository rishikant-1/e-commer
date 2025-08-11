import React from 'react'
import TopNav from './TopNav'
import SearchNav from './SearchNav'
import NavigationBar from './NavigationBar'

function HeaderTop() {
  return (
    <div className=''>
      <TopNav />
      <SearchNav />
      <NavigationBar />
    </div>
  )
}

export default HeaderTop