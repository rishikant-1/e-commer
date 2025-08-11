import React, { useState, useEffect } from 'react';
import newsletterImg from '../../../assets/newsletter.png';
import { IoCloseOutline } from "react-icons/io5";

function NewsletterModal({ state }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (state.popup) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [state.popup]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-[#0000007a] flex justify-center items-center z-50 transition-opacity duration-500 
      ${state.popup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div
        className={`relative bg-white transform transition-transform duration-500 ease-out 
          ${animate ? 'scale-100' : 'scale-0'} 
          rounded-lg shadow-lg w-72 px-6 md:px-0 md:w-[46rem] 
          grid grid-cols-1 md:grid-cols-[55%_1fr]`}
      >
        <img src={newsletterImg} alt="subscribe newsletter" className="rounded-l-md hidden md:block" />
        <button
          onClick={() => state.setPopup(false)}
          className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-500">
          <IoCloseOutline />
        </button>

        <div className="flex flex-col gap-3 text-center items-center justify-center py-10">
          <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
          <p className="text-gray-600">
            Subscribe to <b>Anon</b> to get the latest products and discount updates.
          </p>

          <form>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded px-3 py-2 max-w-[16rem] md:w-full mb-3 focus:outline-[#ea858f]" />
            <button
              type="submit"
              className="px-4 mt-2 md:mt-0 bg-zinc-800 transition duration-300 hover:bg-[#ea858f] cursor-pointer text-white py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;
