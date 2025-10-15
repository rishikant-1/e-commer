import { Router } from "express"
import { uploadImageFields } from "../middleware/multer.middleware.js"
import { createProduct, getAllProduct, getCategory } from "../controllers/product.controller.js"
import verifyJwt from "../middleware/auth.middleware.js"


const productRouter = Router()

productRouter.route('/add-new-product').post(
  verifyJwt,
  uploadImageFields,
  createProduct
)

productRouter.route('/get-all-product').post(getAllProduct)
productRouter.route('/get-category').post(getCategory)

export default productRouter