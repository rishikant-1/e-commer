import axios from "axios";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast'

function ReviewSubmit() {
  const [loading, setLoading] = useState(false);
  const { formData } = useOutletContext();

  const handleSubmit = async () => {
    if (!formData.title || !formData.price) {
      alert("Title and Price are required");
      return;
    }
    setLoading(true);

    const productData = new FormData();



    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((img) => productData.append('images', img));
    }

    
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Review your Product</h3>
      <div className="flex flex-col">
        <b>Title: <span className="font-light">{formData.title}</span></b>
        <b>Category: <span className="font-light">{formData.category}</span></b>
        <b>Price: <span className="font-light">{formData.price}</span></b>
        <b>Description: <span className="font-light">{formData.description}</span></b>
        <b>Tax: <span className="font-light">{formData?.tax}</span></b>
        <b>Description: <span className="font-light">{ }</span></b>
        <b>Thumbnail: <span className="font-light"></span></b>
        <img src={'.jpg'} alt="thumbnail" />
      </div>
      <div className="flex justify-between mt-10">
        <Link
          to='/seller-page/add-product/pricing'
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
        <Toaster />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`px-4 py-2 rounded ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;
