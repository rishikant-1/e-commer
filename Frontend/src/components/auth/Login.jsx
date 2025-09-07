import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUser } from '../../Redux&Toolkit/Slice/authSlice';


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('/api/user/login', {
        email: data.email,
        password: data.password,
        role: data.option
      }, { withCredentials: true })

      if (res.status === 200) {
        dispatch(fetchUser());
        toast.success("Logged in Success")
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauthorized User")
      } else {
        toast.error("something went wrong")
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          })}
          className="w-full px-4 py-2 mt-1 border-none rounded-md focus:outline-none ring-black ring-1 focus:ring-red-500"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          autoComplete='false'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          className="w-full px-4 py-2 mt-1 border-none rounded-md focus:outline-none ring-black ring-1 focus:ring-red-500"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      {/* toaster container */}
      <Toaster />
      <div>
        <select name="option" {...register("option", { required: true })}>
          <option value="customer">Customer</option>
          <option value="seller">seller</option>
          <option value="admin">admin</option>
        </select>
        <span>Select your Role</span>
      </div>
      <img
        src={`https://dummyimage.com/120x40/cccccc/000000&text=${'rishi'}`}
        alt="captcha"
        aria-autocomplete='off'
        className="rounded border h-8 w-fit"
      />
      <button
        disabled={status === "loading" ? true : false}
        type="submit"
        className={`w-full bg-red-300 cursor-pointer ${!(status === "loading") && 'hover:bg-red-400'} text-white font-semibold py-2 rounded-md transition-all duration-300`}
      >
        {status === 'loading' ? 'Loading...' : 'Login'}
      </button>
      <div className='flex items-center justify-center gap-3'>
        <p>Create new Account</p>
        <Link to='/auth/user-register' className='hover:text-blue-500 underline'>Register</Link>
      </div>
    </form>
  );
}

export default Login;
