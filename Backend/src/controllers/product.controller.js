import { Product } from "../models/product.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProduct = asyncHandler(async (req, res) => {
  const { title, description, category, price } = req.body;

  if (!title?.trim() || !category?.trim()) {
    throw new ApiError(400, "Title and Category fields are required");
  }

  // Parse price object
  let parsedPrice;
  try {
    parsedPrice = JSON.parse(price);
  } catch (error) {
    throw new ApiError(400, "Invalid price format");
  }

  if (!parsedPrice.basePrice) {
    throw new ApiError(400, "Base price is required");
  }

  // File check
  if (!req.files || (!req.files.images && !req.files.thumbnail)) {
    throw new ApiError(400, "At least one image and a thumbnail are required");
  }

  const images = req.files.images?.map(file => ({
    url: file.path,
    public_id: file.filename
  })) || [];

  const thumbnail = req.files.thumbnail?.map(file => ({
    url: file.path,
    public_id: file.filename
  })) || [];

  const item = await Product.create({
    title,
    price: parsedPrice,
    category,
    description,
    images,
    thumbnail: thumbnail[0],
    sellerId: req.user._id
  });

  if (!item) {
    throw new ApiError(400, "Something went wrong while creating product");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        item,
        "Product created successfully"
      )
    );
});

const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (!products || products.length === 0) {
    throw new ApiError(404, "No products found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        products,
        "Products successfully fetched"
      )
    );
});

export { createProduct, getAllProduct };
