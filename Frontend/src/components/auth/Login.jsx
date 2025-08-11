import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
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
          className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div>
        <select name="option" {...register("option", { required: true })}>
          <option value="user">User</option>
          <option value="seller">seller</option>
          <option value="admin">admin</option>
        </select>
        <span>Select your</span>
      </div>
      <img
        src={`https://dummyimage.com/120x40/cccccc/000000&text=${'1ie'}`}
        alt="captcha"
        aria-autocomplete='off'
        className="rounded border h-8"
      />
      <button
        type="submit"
        className="w-full bg-red-300 cursor-pointer hover:bg-red-400 text-white font-semibold py-2 rounded-md transition-all duration-300"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
