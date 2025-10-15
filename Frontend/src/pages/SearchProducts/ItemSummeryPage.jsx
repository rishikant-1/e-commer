import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  FaStar, FaChevronDown, FaExchangeAlt, FaTruck,
  FaShieldAlt, FaMoneyBillWave, FaAward, FaAmazon
} from 'react-icons/fa';
import { LuIndianRupee } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { priceDiscount } from '../../utils/priceHelper';

import { fetchAllProduct } from '../../Redux&Toolkit/Slice/searchSlice';


const ItemSummeryPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { products } = useSelector(state => state.product);
  const [mainImage, setMainImage] = useState('');
  const dispatch = useDispatch();



  useEffect(() => {
    const foundProduct = products.find(d => d._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.thumbnail) {
        setMainImage(foundProduct.thumbnail.url);
      }
    }
  }, [products, id]);
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Loading product summary...</div>;
  }

  const features = [
    {
      icon: <FaExchangeAlt className="text-rose-400 w-8 h-8 mb-2" />,
      labelLines: product.returnPolicy?.split('\n') || ['Replacement', 'Unavailable'],
    },
    {
      icon: <FaTruck className="text-gray-700 w-8 h-8 mb-2" />,
      labelLines: ['Free Delivery'],
    },
    {
      icon: <FaShieldAlt className="text-gray-700 w-8 h-8 mb-2" />,
      labelLines: product.warrantyInformation?.split('\n') || ['No', 'Warranty'],
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 w-8 h-8 mb-2" />,
      labelLines: ['Cash/Pay on', 'Delivery'],
    },
    {
      icon: <FaAward className="text-yellow-500 w-8 h-8 mb-2" />,
      labelLines: ['Top Brand'],
    },
    {
      icon: <FaAmazon className="text-rose-600 w-8 h-8 mb-2" />,
      labelLines: ['Anon', 'Delivered'],
    },
  ];

  const discountedPrice = priceDiscount(product.price?.basePrice, product.discount)
  console.log(discountedPrice);

  return (
    <div className="w-full min-h-screen px-4 md:px-24 py-2 flex flex-col gap-8 bg-white">
      <div className='w-full flex flex-col lg:flex-row gap-8'>
        {/* Left: Images */}
        <div className="w-full lg:w-[42%] flex flex-col lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4">
            <div className="w-20 h-20 rounded-md bg-gray-200 overflow-hidden cursor-pointer"
              onClick={() => setMainImage(product.thumbnail?.url)}
            >
              <img src={product.thumbnail?.url} alt={`Thumbnail`} className="w-full h-full  object-fit" />
            </div>
            {product.images?.map((img, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-md bg-gray-200 overflow-hidden cursor-pointer"
                onClick={() => setMainImage(img?.url)}
              >
                <img src={img?.url} alt={`Thumbnail ${index}`} className="w-full h-full  object-fit" />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <img className="w-full h-full object-contain rounded-md" src={mainImage} alt={product.title || 'Product Image'} />
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-[58%] flex flex-col lg:flex-row gap-6">
          {/* Product Info */}
          <div className="flex-1">
            {/* <h1 className="font-semibold text-2xl tracking-tight">{product.title}</h1> */}
            <p className="text-xl font-sans tracking-tight">{product.description}</p>
            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-400 mt-2">
              <span className="text-gray-500 text-sm">{product.rating}</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.round(product.rating) ? 'text-orange-400' : 'text-gray-300'} />
              ))}
              <FaChevronDown color="black" />
              <span className="text-black">(2,345)</span>
            </div>
            <p className="text-xs text-gray-500">5K+ bought in past month</p>
            <hr className="mt-2 text-gray-300" />

            {/* Price */}
            <div className="flex gap-2 mt-3 items-baseline">
              <p className="text-red-500 text-xl md:text-2xl">-{product.price?.discount}%</p>
              <p className="text-black text-xl md:text-2xl font-semibold flex items-baseline">
                <LuIndianRupee className="text-sm opacity-70" />
                {Math.round(product.price?.discountedPrice)}
                <sup className="opacity-70 text-sm">00</sup>
              </p>
            </div>
            <div className="flex items-end text-xs gap-1 mt-2">
              <p>M.R.P.:</p>
              <p className="text-black font-semibold line-through opacity-60 flex items-center">
                <LuIndianRupee size={'12px'} />
                {product.price?.basePrice.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Table */}
            <div className="max-w-md mt-6">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr><th className="py-2 font-medium text-black w-1/3">Brand</th><td className="py-2 text-gray-900">{product?.brand}</td></tr>
                  <tr><th className="py-2 font-medium text-black">Compatible</th><td className="py-2 text-gray-900">{product?.category} only</td></tr>
                  <tr><th className="py-2 font-medium text-black">Shipping</th><td className="py-2 text-gray-900">{product?.shippingInformation}</td></tr>
                  <tr><th className="py-2 font-medium text-black">Product Id</th><td className="py-2 text-gray-900">{product?.sku}</td></tr>
                </tbody>
              </table>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 mt-8 bg-white p-6 rounded-md shadow-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {feature.icon}
                  <div className="text-sm font-medium text-gray-700">
                    {feature.labelLines.map((line, i) => <div key={i}>{line}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buy Box */}
          <div className="w-full lg:w-64 border border-gray-300 h-fit p-4 rounded-md shadow-sm flex flex-col justify-between">
            <div className="text-black text-xl md:text-2xl font-semibold">
              <span className="flex items-baseline">
                <LuIndianRupee className="text-sm opacity-70" />
                {product.price?.basePrice.toLocaleString('en-IN')}
                <sup className="opacity-70 text-sm">00</sup>
              </span>
              <div className='mt-6'>
                <span className='font-normal text-lg'>Items:({product?.stock || 0})</span>
                {product?.stock >= 0
                  ? <span className='text-green-500 text-2xl font-semibold'> In Stock</span>
                  : <span className='text-red-400 text-xl font-semibold'> Out Of Stock</span>}
              </div>
            </div>

            {/* Seller Info */}
            <div>
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr>
                    <th className="text-gray-900 w-1/3 font-normal">Ship From:</th>
                    <td className="text-black font-semibold">Anon</td>
                  </tr>
                  <tr>
                    <th className="font-normal text-gray-900 w-1/2">Sold by:</th>
                    <td className="text-blue-500 hover:underline cursor-pointer">Eleanor retail <br />Private limited
                    </td>
                  </tr>
                  <tr>
                    <th className="font-normal text-gray-900 w-1/3">Payment:</th>
                    <td className="text-blue-500 hover:underline cursor-pointer">Secure transaction
                    </td>
                  </tr>
                  <tr>
                    <th className="font-normal text-gray-900 w-1/3">Gift option:</th>
                    <td className="text-blue-500 hover:underline cursor-pointer">Available At CheckOut
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Warranty */}
            <div>
              <b>Add a Protection Plan:</b>
              <div className='flex items-start py-2'>
                <input className='mt-1.5 mr-2' type="checkbox" />
                <p className='text-red-500 tracking-tight'>
                  <span className='text-blue-400 hover:underline'>
                    Extended warranty for 1 Year<br />
                    <span className='text-black'>for</span>
                  </span> ₹129.00
                </p>
              </div>
            </div>

            {/* Tags */}
            <span>Tags</span>
            <div className='flex gap-2 flex-wrap'>
              {product.tags?.map((tag, index) => (
                <div key={index} className='bg-gray-100 py-1 px-3 rounded-full'>{tag}</div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-2">
              <select className='w-full bg-gray-200 py-1 px-3 rounded-md'>
                {[1, 2, 3, 4, 5].map((d) => (
                  <option key={d}>Quantity: {d}</option>
                ))}
              </select>
              <button
                className="py-2 px-5 text-white w-full bg-red-300 hover:bg-red-400 cursor-pointer rounded-full"
                // onClick={() => dispatch(addCartItem(product._id))}
              >
                Add to Cart
              </button>
              <button className="py-2 px-5 text-white w-full bg-red-400 rounded-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* products */}
      <div>
        k
      </div>
      {/* Reviews */}
      <div className='w-full lg:px-72'>
        <h2 className='text-2xl font-semibold '>Product Reviews for Buyers</h2>
        {product.reviews?.length ? product.reviews.map((d, index) => (
          <div key={index} className='border border-gray-200 mb-1 px-4 py-3 rounded'>
            <div className='flex gap-3 items-center'>
              <div className='h-10 w-10 rounded-full overflow-hidden bg-amber-200'>
                <img className='rounded-full h-10 w-10' src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Reviewer Avatar" />
              </div>
              <div>
                <p className='font-medium'>{d.reviewerName}</p>
                <p className='text-sm text-blue-500'>{d.reviewerEmail}</p>
              </div>
            </div>
            <div className='ml-12 mt-2'>
              <div className='flex items-center gap-1 text-orange-400'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(d.rating) ? 'text-orange-400' : 'text-gray-300'} />
                ))}
              </div>
              <p className='text-sm mt-1'>{d.comment}</p>
              <p className="text-xs text-gray-500">
                {new Date(d.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
              </p>
            </div>
          </div>
        )) : <p className='text-gray-400 mt-2'>No reviews yet.</p>}
      </div>
    </div>
  );
};

export default ItemSummeryPage;
