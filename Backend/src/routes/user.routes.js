import { Router } from "express";
import { login, logOut, myData, register } from "../controllers/user.controller.js";
import verifyJwt from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)
userRouter.route("/logout").post(verifyJwt, logOut)
userRouter.route("/user-data").post(verifyJwt, myData)

export default userRouter