import { asyncHandler } from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'
import ApiResponse from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'



const register = asyncHandler(async (req, res) => {
  const { fullname, email, password, role } = req.body


  if ([fullname.firstname, email, password, role].some(d => d === '')) {
    throw new ApiError(400, 'All fields required')
  }
  const exisitedUser = await User.findOne({ email, role })


  if (exisitedUser) {
    throw new ApiError(401, 'User with this role already exists')
  }

  const createdUser = await User.create({
    fullname,
    email,
    password,
    role
  })

  if (!createdUser) {
    throw new ApiError(401, 'user not created')
  }
  const user = await User.findById(createdUser._id).select("-password -refreshToken")
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        user,
        'use created successfully'
      )
    )
})

const login = asyncHandler(async (req, res) => {

})


export {
  register,
  login,
} 