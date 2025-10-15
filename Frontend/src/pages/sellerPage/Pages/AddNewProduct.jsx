import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productPopup } from "../../../Redux&Toolkit/Slice/menuSlice";

function AddNewProduct() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: {
      basePrice: "",
      discount: "",
    },
    brand: "",
    model: "",
    images: [],
    thumbnail: {},
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()


  return (
    <div className="fixed h-screen w-full bg-[#1111113e] top-0 left-0 flex justify-center items-center">
      <div className="bg-white rounded-md p-10 h-[90%] w-[80%] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Add New Product</h2>

          <button
            onClick={() => (
              dispatch(productPopup(false)),
              navigate("/seller-page")
            )}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>

        {/* --- I will return to the work after some time--- */}

        {/* <div className="w-full flex justify-between items-center">
          <div className="flex-1 h-2 bg-gray-300 relative">
            <div className="absolute top-0 left-0 h-2 bg-green-500" style={{ width: '50%' }}></div>
          </div>
          <span className="h-5 w-5 rounded-full bg-white border-2 border-green-500"></span>
          <span className="h-5 w-5 rounded-full bg-white border-2 border-green-500"></span>
        </div> */}

        <Outlet context={{ formData, setFormData }} />
      </div>
    </div>
  );
}

export default AddNewProduct;
