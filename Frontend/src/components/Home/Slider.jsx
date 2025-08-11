import React from 'react';
import img1 from '../../assets/banner-1.jpg';
import img2 from '../../assets/banner-2.jpg';
import img3 from '../../assets/banner-3.jpg';

function Slider() {
  const slider = [
    { imgName: img1, btn: "SHOP NOW", trend: "Trending item", sale: "Women's latest fashion sale", price: "20" },
    { imgName: img2, btn: "SHOP NOW", trend: "Trending item", sale: "Women's latest fashion sale", price: "20" },
    { imgName: img3, btn: "SHOP NOW", trend: "Trending item", sale: "Women's latest fashion sale", price: "20" },
  ];

  return (
    <section className="flex w-[100%] h-auto rounded-md overflow-x-scroll custom-scrollbar scroll-smooth snap-x snap-mandatory">
      {slider.map((item, index) => (
        <div
          key={index}
          className="w-[100%] h-[200px] sm:h-[300px] md:h-[320px] lg:h-[450px] flex-shrink-0 rounded-xl bg-cover bg-center snap-start"
          style={{ backgroundImage: `url(${item.imgName})` }}
        >
          <div className="h-full flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 lg:px-30 sm:gap-2 gap-0">
            <p className="text-xl md:text-3xl font-semibold text-[#ff8f9c]">{item.trend}</p>
            <p className='text-2xl lg:text-5xl font-medium md:font-bold max-w-[15rem] md:max-w-sm text-[#000000c6]'>
              {item.sale}</p>
            <p className='text-xl md:text-2xl font-semibold text-[#0000009e]'>starting at $
              <span className='font-extrabold text-2xl md:text-4xl'>{item.price}</span>
              .00</p>
            <button className="mt-3 bg-[#ff8f9c] cursor-pointer text-white hover:bg-zinc-900 font-bold px-4 py-2 rounded">{item.btn}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Slider;
