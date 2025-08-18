import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    tax: "",
    ratings: "",
    images: [],
    thumbnail: {}
  });

  

  return (
    <div className="mx-auto w-full py-8 px-24 ring-1 ring-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <Outlet context={{ formData, setFormData }} />
    </div>
  );
}

export default AddNewProduct;
