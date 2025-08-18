import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import {createCloudinaryStorage} from 'multer-storage-cloudinary'
import ApiError from '../utils/apiError.js'
import dotenv from "dotenv"

dotenv.config()


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


export const storage = new createCloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const category = req.body.category || 'general'
    return {
      resource_type: "image",
      folder: `E-commerce/${category}`,
      public_id: Date.now() + "-" + file.originalname.split(".")[0],
      allowed_formats: ["jpeg", "png", "webp", "jpg"],
      transformation: [{ quality: "auto" }, { fetch_format: "auto" }]
    }
  }
})


export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return new ApiError(400, 'Only image files are allowed', false)
    }
    
    cb(null, true)
  }
})

export const uploadImageFields = upload.fields([
  {name:'images', maxCount: 4},
  {name: 'thumbnail', maxCount: 1}
])