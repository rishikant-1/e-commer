import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post('/api/user/register', {
      fullname: {
        firstname: data.firstname,
        lastname: data.lastname
      },
      email: data.email,
      password: data.password,
      role: data.role
    },
      {
        withCredentials: true
      })

    if (res.data.statusCode === 201) {
      toast.success("user created succes")
      setTimeout(()=>{
        navigate('/auth/user-login')
      },1000)
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* fullname */}
      <div className='flex items-center gap-2 justify-between'>
        {/* first name  */}
        <div className='flex flex-col'>
          <label className="block text-sm font-medium text-gray-700">First name</label>
          <input
            type="text"
            {...register('firstname', { required: 'firstname is required' })}
            className="w-full px-4 py-2 mt-1 border-none rounded-md focus:outline-none ring-black ring-1 focus:ring-red-500"
            placeholder="First name"
          />
        </div>

        {/* toaster container */}
        <Toaster />

        {/* last name  */}
        <div className='flex flex-col'>
          <label className="block text-sm font-medium text-gray-700">Last name</label>
          <input
            type="text"
            {...register('lastname')}
            className="w-full px-4 py-2 mt-1 border-none rounded-md focus:outline-none ring-black ring-1 focus:ring-red-500"
            placeholder="Last name"
          />
        </div>
      </div>

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
      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          {...register('confirm_password', {
            required: 'confirm_password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          className="w-full px-4 py-2 mt-1 border-none rounded-md focus:outline-none ring-black ring-1 focus:ring-red-500"
          placeholder="••••••••"
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>
        )}
      </div>

      <div>
        <select name="option" {...register("role", { required: true })}>
          <option value="customer">customer</option>
          <option value="seller">seller</option>
        </select>
        <span>Select your</span>
      </div>

      <button
        type="submit"
        className="w-full bg-red-300 cursor-pointer hover:bg-red-400 text-white font-semibold py-2 rounded-md transition-all duration-300"
      >
        Register
      </button>
      <div className='flex items-center justify-center gap-3'>
        <p>Already Account</p>
        <Link to='/auth/user-login' className='hover:text-blue-500 underline'>Login</Link>
      </div>
    </form>
  );
}

export default Register;
