import { Link, useOutletContext } from "react-router-dom";

function Pricing() {
  const { formData, setFormData } = useOutletContext();

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Discount (%)</label>
        <input
          type="number"
          value={formData.discount}
          onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Tax (%)</label>
        <input
          type="number"
          value={formData.tax}
          onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex justify-between">
        <Link 
          to='/seller-page/add-product/images'
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
        <Link
          to='/seller-page/add-product/review-submit'
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Pricing;
