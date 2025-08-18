import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Images() {
  const [preview, setPreview] = useState(null);
  const { formData, setFormData } = useOutletContext();

  // Multiple images
  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  // Single file
  const handleSingleFile = (e) => {
    const file = e.target.files[0]; 
    setFormData({ ...formData, thumbnail: file });
    setPreview(URL.createObjectURL(file)); 
  }

  return (
    <div className="space-y-4">
      <label className="block font-medium">Upload Product Images</label>
      <input type="file" multiple onChange={handleFiles} className="border p-2 rounded" />
      <div className="flex flex-wrap gap-2">
        {formData.images && formData.images.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>
      <label className="block font-medium">Upload Product Thumbnail</label>
      <input type="file" onChange={handleSingleFile} className="border p-2 rounded" />
      <div className="flex flex-wrap gap-2">
        {preview &&
          <img
            src={preview}
            alt="preview"
            className="w-24 h-24 object-cover rounded"
          />
        }
      </div>

      <div className="flex justify-between">
        <Link
          to='/seller-page/add-product'
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
        <Link
          to='/seller-page/add-product/pricing'
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Images;
