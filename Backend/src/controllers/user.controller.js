import { asyncHandler } from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'
import ApiResponse from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'


const generateAccessAndRefreshToken = async (userId) => {

  if (!userId) {
    throw new ApiError(401, 'User id not found')
  }
  try {
    const user = await User.findById(userId)

    if (!user) {
      throw new ApiError(401, 'user not found')
    }


    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()


    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { refreshToken, accessToken }
  } catch (error) {
    throw new ApiError(401, 'something went wrong while generating accessAndRefreshToken')
  }

}

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
  const { role, email, password } = req.body;
  if ([role, email, password].some(field => !field.trim())) {
    throw new ApiError(400, "all fields required");
  }

  const user = await User.findOne({ email, role })
  if (!user) {
    throw new ApiError(401, "Unauthorized user")
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'enter valid password')
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
  const option = {
    secure: true,
    httpOnly: true,
    sameSite: "strict"
  }
  return res
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          refreshToken,
          accessToken,
        },

        "User LoggedIn SuccessFully"
      )
    )
})

const logOut = asyncHandler(async (req, res) => {
  
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1
      }
    },
    {
      new: true
    }
  )
  const option = {
    secure: true,
    httpOnly: true,
  }
  return res
    .clearCookie("refreshToken", option)
    .clearCookie("accessToken", option)
    .json(
      new ApiResponse(
        201,
        {},
        "LogOut SuccessFully"
      )
    )
})

const myData = asyncHandler(async (req, res) => {
  return res
  .json(
    new ApiResponse(
      200,
      {
        userData: req.user
      },
      "user data fetched"
    )
  )
})



export {
  register,
  login,
  logOut,
  myData
} 