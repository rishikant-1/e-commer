import { useEffect, useState } from "react"

function useFetchProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchProduct = async (productApiUrl) => {
      try {
        const response = await axios.post(productApiUrl);
        if(response.status===200){
          const product = response.data.data;
          setProducts(product)
        }
      } catch (error) {
        setError(error || "something went wrong while fetching product")
      } finally{
        setLoding(false)
      }
    }
    fetchProduct()
  }, [])
  return {products, loading, error}
}

export default useFetchProduct