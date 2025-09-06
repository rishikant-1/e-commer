import { asyncHandler } from "../utils/asyncHandler.js";
import { Cart } from "../models/cart.model.js";
import ApiError from "../utils/apiError.js";

const addCartItem = asyncHandler(async (req, res) => {
  const { itemId } = req.body;
  console.log(itemId);
  const userId = req.user._id;
  let cart = await Cart.findOne({ userId });
  
  if (!cart) {
    cart = await Cart.create({
      userId,
      items: []
    });
  }
  const existedItem = cart.items.find(i => i.itemId.toString() === itemId)
  console.log(existedItem);
  
  if (existedItem) {
    existedItem.quantity++;
  } else {
    cart.items.unshift({ itemId: itemId, quantity: 1 })
  }

  await cart.save();

  return res.status(200).json({
    success: true,
    message: "Item added to cart",
    data: cart,
  });
});

const removeCartItem = asyncHandler(async (req, res) => {
  const { itemId } = req.body;
  const userId = req.user._id;

  let cart = await Cart.findOne({ userId });


  const existedItem = cart.items.find(i => i.itemId.toString() === itemId)
    if (existedItem && existedItem.quantity > 1) {
      existedItem.quantity--;
    } else {
      cart.items.filter(i => i.itemId.toString() !== itemId)
    }

  await cart.save();

  return res.status(200).json({
    success: true,
    message: "Item remove to cart",
    data: cart,
  });
});

const deleteCartItem = asyncHandler(async (req, res) => {
  const { itemId } = req.body;
  const userId = req.user._id;

  let cart = await Cart.findOne({ userId });


  cart.items.find(i => i.itemId.toString() !== itemId)

  await cart.save();

  return res.status(200).json({
    success: true,
    message: "Item delete to cart",
    data: cart,
  });
});


const fetchCartItem = asyncHandler(async (req, res) => {

  const userId = req.user._id;

  let cart = await Cart.findOne({ userId }).populate("items.itemId")
  if (!cart) {
    throw ApiError(500, "data not fetched")
  }

  return res.status(200).json({
    success: true,
    message: "Fetch cart data",
    data: cart,
  });
});

export { addCartItem, removeCartItem, deleteCartItem, fetchCartItem };
