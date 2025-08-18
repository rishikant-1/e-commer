import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex items-start mt-2 justify-center min-h-screen bg-white px-6 sm:px-12 lg:px-24">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/2">
          <img
            src="/front-view-girl-with-tablet-home_23-2149458393.avif"
            alt="Auth Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 bg-red-50 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
