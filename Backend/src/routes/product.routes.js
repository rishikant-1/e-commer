import { Router } from "express"
import { uploadImageFields } from "../middleware/multer.middleware.js"
import verifyJwt from "../middleware/auth.middleware.js"
import {
  createProduct,
  getAllProduct,
  getCategory,
  getProductParticularSeller
}
  from "../controllers/product.controller.js"


const productRouter = Router()

productRouter.route('/add-new-product').post(
  verifyJwt,
  uploadImageFields,
  createProduct
)

productRouter.route('/get-all-product').post(getAllProduct)
productRouter.route('/get-category').post(getCategory)
productRouter.route('/get-seller-products').post(verifyJwt, getProductParticularSeller)

export default productRouter