import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { createCloudinaryStorage } from 'multer-storage-cloudinary'
import ApiError from '../utils/apiError.js'
import dotenv from "dotenv"

dotenv.config()


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


const storage = new createCloudinaryStorage({
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

const profileStorage = new createCloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'E-commerce/ProfilePic',
      resource_type: 'image',
      public_id: Date.now() + "-" + file.originalname.split(".")[0],
      allowed_formats: ["jpeg", "png", "jpg", "webp"],
      transformation: [{ quality: "auto", fetch_format: "auto" }]
    }
  }
})

export const avatar = multer({
  storage: profileStorage,
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new ApiError(400, 'Only image files are allowed', false))
    }
    cb(null, true)
  }

})
export const upload = multer({
  storage,
  limits: {
    fileSize: 3 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new ApiError(400, 'Only image files are allowed', false))
    }
    cb(null, true)
  }
})



export const uploadImageFields = upload.fields([
  { name: 'images', maxCount: 4 },
  { name: 'thumbnail', maxCount: 1 },
])

export default cloudinary