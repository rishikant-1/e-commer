import { Router } from "express";
import { editProfile, login, logOut, myData, register, updateAdress } from "../controllers/user.controller.js";
import verifyJwt from "../middleware/auth.middleware.js";
import { ProfilePic } from "../middleware/multer.middleware.js";

const userRouter = Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)
userRouter.route("/logout").post(verifyJwt, logOut)
userRouter.route("/user-data").post(verifyJwt, myData)
userRouter.route("/update-profile").put(ProfilePic.single("profilepic"), verifyJwt, editProfile)
userRouter.route("/update-address").put(verifyJwt, updateAdress)

export default userRouter