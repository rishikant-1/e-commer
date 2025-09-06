import { useEffect, useState } from "react";
import axios from "axios";

function useFetchProduct(productApiUrl) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productApiUrl) return; 

    const fetchProduct = async (productApiUrl) => {
    
      
      try {
        const response = await axios.get(`http://localhost:5000/${productApiUrl}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          setProducts(response.data.data || []);
        }
      } catch (err) {
        setError(err.message || "Something went wrong while fetching product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productApiUrl]);

  return { products, loading, error };
}

export default useFetchProduct;
