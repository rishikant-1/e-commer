import { Router } from "express";
import { addCartItem, deleteCartItem, fetchCartItem, removeCartItem } from "../controllers/cart.controller.js";
import verifyJwt from '../middleware/auth.middleware.js'


const cartRout = Router()


cartRout.route("/add-cart-item").post(verifyJwt, addCartItem)
cartRout.route("/remove-cart-item").post(verifyJwt, removeCartItem)
cartRout.route("/delete-cart-item").post(verifyJwt, deleteCartItem)
cartRout.route("/fetch-cart-items").post(verifyJwt, fetchCartItem)

export {cartRout}