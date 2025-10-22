import { useRef, useState } from 'react'
import logo from '../../../assets/logo/logo.svg'
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, filterProductByInputSearch } from '../../../Redux&Toolkit/Slice/searchSlice';
import ProfileTab from '../Profile/ProfileTab';
import { fetchUser } from '../../../Redux&Toolkit/Slice/authSlice';


function SearchNav() {
  const [profileTab, setProfileTab] = useState(false)
  const { user } = useSelector(state => state.auth)
  const inputref = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items } = useSelector(state => state.cart)
  console.log(user);

  const searchHandler = () => {
    if (inputref.current.value !== '') {
      dispatch(filterProductByInputSearch(inputref.current.value))
      navigate('products')
    } else {
      dispatch(getAllProduct())
    }
  }

  return (
    <div className='flex sm:flex-row flex-col items-center justify-between py-5 px-5 sm:px-10 md:px-24 border-t-1 border-gray-200 border-b-1'>
      <div className='flex justify-between w-full sm:w-fit items-center py-2'>
        <Link to='/'><img className='w-30' src={logo} alt="logo" /></Link>
        <div className='flex sm:hidden  cursor-pointer opacity-100 relative'>
          <div onClick={() => {
            setProfileTab(!profileTab)
            if (!user) dispatch(fetchUser())
            setProfileTab(!profileTab)
          }}>
            {user?.avatar?.url ? (
              <img
                className="h-8 min-w-8 rounded-full object-cover border border-pink-300 shadow-sm"
                src={user?.avatar?.url}
                alt="Profile"
              />
            ) : (
              <FaRegCircleUser size={"24px"} />
            )}
          </div>

          <ProfileTab profileTab={profileTab} setProfileTab={setProfileTab} />

        </div>
      </div>

      <div className='flex items-center ring-1 max-w-4xl ring-gray-200 rounded-md pr-3 mx-3 w-full'>
        <input className='w-full md:block p-2 outline-0 '
          type="text"
          placeholder='Enter Your Product Name'
          ref={inputref}
          onInput={(e) => dispatch(filterProductByInputSearch(e.target.value))}
          onKeyDown={(e) => e.key === 'Enter' && searchHandler()}
        />
        <Link to='products'></Link>
        <IoSearchSharp size={"25px"} onClick={searchHandler}
          className='cursor-pointer opacity-60 ' />
      </div>
      <div className='hidden sm:flex items-center gap-4'>
        <div className='cursor-pointer opacity-100 relative'>
          <div onClick={() => {
            setProfileTab(!profileTab)
            if (!user) dispatch(fetchUser())
            setProfileTab(!profileTab)
          }}>
            {user?.avatar?.url ? (
              <img
                className="h-8 min-w-8 rounded-full object-cover border border-pink-300 shadow-sm"
                src={user?.avatar?.url}
                alt="Profile"
              />
            ) : (
              <FaRegCircleUser size={"24px"} />
            )}
          </div>

          <ProfileTab profileTab={profileTab} setProfileTab={setProfileTab} />

        </div>
        <div className='relative cursor-pointer'>
          <GoHeart size={"25px"} />
          <span className='absolute flex items-center justify-center -top-[7px] -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-xs'>0</span>
        </div>
        <Link to='/cart' className='relative cursor-pointer'>
          <FaOpencart size={"30px"} />
          {items.items?.length > 0 && <span className='absolute flex items-center justify-center -top-1 -right-1 bg-red-400 text-white rounded-full h-4 w-4 text-xs'>{items.items?.length}</span>}
        </Link>
      </div>
    </div>
  )
}

export default SearchNav