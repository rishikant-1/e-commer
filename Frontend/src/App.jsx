import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationIcons from './components/NavigationIcons'
import NewsletterModal from './components/common/PopupAnimate/NewsletterModal'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AuthLayout from './pages/Auth/AuthLayout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


function App() {
  const [popup, setPopup] = useState(false)
  useEffect(() => {
   const timer = setTimeout(() => {
      setPopup(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <BrowserRouter>
    <NewsletterModal state={{setPopup, popup}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='user-login' element={<Login />} />
          <Route path='user-register' element={<Register />} />
        </Route>
      </Routes>
      <NavigationIcons />
    </BrowserRouter>
  )
}

export default App