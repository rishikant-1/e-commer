import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationIcons from './components/NavigationIcons'
import NewsletterModal from './components/common/PopupAnimate/NewsletterModal'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AuthLayout from './pages/Auth/AuthLayout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import HeaderTop from './components/common/HeaderTop/HeaderTop'
import Footer from './components/common/Footer/Footer'
import HomeLayOut from './Layout/HomeLayOut'
import Products from './pages/SearchProducts/Products'
import ProtectedRoute from './components/auth/ProtectedRout'
import { useDispatch, useSelector } from 'react-redux'
import Main from './pages/sellerPage/Component/Main'
import AddNewProduct from './pages/sellerPage/Pages/AddNewProduct'
import SellerHome from './pages/sellerPage/Pages/SellerHome'
import ProductDetails from './pages/sellerPage/Component/AddProduct/AddProductDetails'
import Pricing from './pages/sellerPage/Component/AddProduct/Pricing'
import Images from './pages/sellerPage/Component/AddProduct/Images'
import ReviewSubmit from './pages/sellerPage/Component/AddProduct/ReviewSubmit'
import { fetchUser } from './Redux&Toolkit/Slice/authSlice'
import NotFoundPage from './components/NotFoundPages/NotFoundPage'
import UnauthorizedPage from './components/NotFoundPages/UnauthorizedPage'
import ProfilePage from './components/common/Profile/ProfilePage'
import CheckOutPage from './pages/checkOut/CheckOutPage'
import My_oders from './pages/My_oders'

function App() {


  const dispatch = useDispatch()
  const [popup, setPopup] = useState(false)
  useEffect(() => {
    dispatch(fetchUser());
    const timer = setTimeout(() => {
      setPopup(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [dispatch])

  return (
    <BrowserRouter>
      <NewsletterModal state={{ setPopup, popup }} />
      <HeaderTop />
      <Routes>
        <Route path="/" element={<HomeLayOut />}>
          <Route path='' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='profile' element={<ProtectedRoute children={<ProfilePage />} />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/check-out' element={<CheckOutPage />} />
        <Route path='/my-oders' element={<My_oders />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='user-login' element={<Login />} />
          <Route path='user-register' element={<Register />} />
        </Route>
        <Route path='/seller-page' element={
          <ProtectedRoute
            allowedRole='seller'
            children={<SellerHome />}
          />}>
          <Route path='' element={<Main />} />
          <Route path='add-product' element={<AddNewProduct />}>
            <Route path='' element={<ProductDetails />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='images' element={<Images />} />
            <Route path='review-submit' element={<ReviewSubmit />} />
          </Route>
        </Route>
        <Route path='/unauthorized-page' element={<UnauthorizedPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <NavigationIcons />
    </BrowserRouter>
  )
}

export default App