import { Link, useOutletContext } from "react-router-dom";

function ProductDetails() {
  const { formData, setFormData } = useOutletContext();

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full border p-2 rounded"
        ></textarea>
      </div>

      <Link to='images'
        className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
      >
        Next
      </Link>
    </div>
  );
}

export default ProductDetails;
