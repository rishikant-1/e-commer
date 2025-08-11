import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTop from '../../components/common/HeaderTop/HeaderTop';
import Footer from '../../components/common/Footer/Footer';

function AuthLayout() {
  return (
    <>
      <HeaderTop />

      <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gray-50 px-4">
        
        {/* Left Side - Image  */}
        <div className="hidden md:flex w-1/2 h-full justify-center items-center">
          <img
            src='/front-view-girl-with-tablet-home_23-2149458393.avif'
            alt="Auth Banner"
            className="h-[80vh] w-full rounded-lg shadow-xl"
          />
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full h-[80vh] bg-white rounded-xl shadow-xl py-10 px-24">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AuthLayout;
