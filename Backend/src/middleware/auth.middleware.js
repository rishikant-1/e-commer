import JsonWebToken from "jsonwebtoken";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    throw new ApiError(401, 'Unothorized Request');
  }

  const decodedToken = JsonWebToken.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

  if (!user) {
    throw new ApiError(401, 'Invalid Token')
  }

  req.user = user
  next()
})

export default verifyJwt