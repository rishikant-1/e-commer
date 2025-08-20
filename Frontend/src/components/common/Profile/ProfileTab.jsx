import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { clearUser } from '../../../Redux&Toolkit/Slice/authSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function ProfileTab({ profileTab, setProfileTab }) {
  const { user, status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logOutHandler = async () => {
    try {
      const res = await axios.post('/api/user/logout', {}, { withCredentials: true });

      if (res.status === 200) {
        setProfileTab(false)
        toast.success("Logout success");
        dispatch(clearUser());
        navigate('/');
      }
    } catch (error) {
      toast.error("Something wrong");
    }
  }
  return (
    <div className={`absolute ${profileTab && 'visible'} invisible top-10 right-3 w-60 z-40 shadow-xl bg-white rounded-md pb-2
          overflow-hidden border border-gray-200 animate-slide-down`}>

      {/* Profile Header */}
      <div className="flex flex-col items-center justify-center py-2 bg-gradient-to-r from-pink-50 to-pink-0">
        <img
          className="h-16 w-16 rounded-full object-cover border border-pink-300 shadow-sm"
          src="/profile.jpg"
          alt="Profile"
        />
        {
          (status === 'success') ? <div className='items-center flex-col'>
            <h3 className="text-lg text-center font-semibold mt-2">{user?.fullname?.firstname} {user?.fullname?.lastname}</h3>
            <p className="text-sm text-gray-600">{user?.email}</p>
            <span className="bg-yellow-300 hidden text-yellow-800 text-xs px-3 py-1 mt-1 rounded-full">🌟 Premium Member</span>
          </div>
            :
            <div className='flex items-center flex-col'>
              <Link onClick={() => setProfileTab(false)} to='/auth/user-login' className="text-md hover:text-blue-500 hover:underline font-sans font-semibold mt-2">Login/SignUp</Link>
            </div>
        }

      </div>
      <Toaster />
      {/* Menu Options */}
      <div className="flex flex-col">
        <Link to='/my-oders' onClick={() => setProfileTab(false)} className="px-4 py-2 text-left hover:bg-gray-100">Oders history
        </Link>
        <Link to='/profile' onClick={() => setProfileTab(false)} className="px-4 py-2 text-left hover:bg-gray-100">My Account
        </Link>
        {
          user?.role === 'seller' ?
            <Link onClick={() => setProfileTab(false)} to='/seller-page' className="px-4 py-2 text-left hover:bg-gray-100">seller Page</Link>
            :
            user?.role === 'admin' ?
              <Link onClick={() => setProfileTab(false)} to='seller-login' className="px-4 py-2 text-left hover:bg-gray-100">Admin Page</Link>
              : ''
        }
        <button onClick={() => setProfileTab(false)} className="px-4 py-2 text-left hover:bg-gray-100">Help Center</button>
        <button onClick={() => setProfileTab(false)} className="px-4 py-2 text-left hover:bg-gray-100">Settings</button>
      </div>
      {/* Logout */}
      <div className="border-t border-gray-200">
        <button onClick={logOutHandler} className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50">
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileTab