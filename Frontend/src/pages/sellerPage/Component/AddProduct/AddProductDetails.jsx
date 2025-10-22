import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import API from "../../../../utils/Api";

function AddProductDetails() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Watch file inputs for previews
  const watchImages = watch("images");
  const watchThumbnail = watch("thumbnail");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.post('/api/seller/get-category');
        if (res.status === 200) setCategories(res.data.data);
      } catch (error) {
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  // Handle submit
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Append text fields
      Object.keys(data).forEach((key) => {
        if (key !== "images" && key !== "thumbnail") {
          formData.append(key, data[key]);
        }
      });

      // Append files
      Array.from(data.images || []).forEach((file) =>
        formData.append("images", file)
      );
      if (data.thumbnail?.[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      await API.post('/api/seller/add-new-product', formData, {
        withCredentials: true,
      });

      toast.success(" Product added successfully!");
      reset(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg space-y-6">
      <Toaster />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Product Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Product Details
          </h2>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full border p-2 rounded"
              placeholder="Enter product title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              {...register("category", { required: "Select a category" })}
              className="border w-full p-2 rounded"
            >
              <option hidden>Choose Category</option>
              {Object.keys(categories.category || {}).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full border p-2 rounded"
              placeholder="Enter product description"
              rows="4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>
        </div>

        {/* Product Images */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Images
          </h2>

          {/* Multiple Images */}
          <div>
            <label className="block font-medium mb-1">
              Upload Product Images (Multiple)
            </label>
            <input
              type="file"
              multiple
              {...register("images")}
              className="border p-2 rounded w-full"
              accept="image/*"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {watchImages &&
                Array.from(watchImages).map((file, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium mb-1">
              Upload Thumbnail (Single)
            </label>
            <input
              type="file"
              {...register("thumbnail")}
              className="border p-2 rounded w-full"
              accept="image/*"
            />
            {watchThumbnail?.[0] && (
              <img
                src={URL.createObjectURL(watchThumbnail[0])}
                alt="thumbnail"
                className="w-24 h-24 object-cover rounded mt-3"
              />
            )}
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Price (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: "Price is required" })}
                className="w-full border p-2 rounded"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Discount (%)</label>
              <input
                type="number"
                {...register("discount")}
                className="w-full border p-2 rounded"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Tax (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("tax", { required: "Tax is required" })}
                className="w-full border p-2 rounded"
                placeholder="Enter tax"
              />
              {errors.tax && (
                <p className="text-red-500 text-sm">{errors.tax.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
            } text-white px-6 py-2 mb-10 rounded font-semibold`}
          >
            {loading ? "Processing..." : "Submit Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductDetails;
