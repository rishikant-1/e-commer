import React, { useEffect, useState } from "react";
import API from '../../../../utils/Api'

function MyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const res = await API.post("/api/seller/get-seller-products");
        setProducts(res.data.data || []);
      } catch (error) {
        console.error("Error fetching seller products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        No products added yet.
      </div>
    );
  }

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        My Products ({products.length})
      </h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.thumbnail?.url || product.images?.[0].url}
              alt={product.title}
              className="w-full h-48 object-contain scale-100 hover:scale-105 transition duration-300 rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-red-600 font-bold text-lg">
                  ₹{product.price?.basePrice}
                </span>
                <button className="bg-red-400 hover:bg-red-500 text-white text-sm px-3 py-1 rounded-md">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProducts;
