// here we will handle authentication of the users routes for user registration (/register) and login (/login).

import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../../controllers/auth.js";
import {
  validateUserLogin,
  validateUserRegistration,
} from "../../middleware/validator.js";
const authRouter = Router();

// /api/v1/auth/register
authRouter.post("/register", validateUserRegistration, registerUser);

// /api/v1/auth/login
authRouter.post("/login", validateUserLogin, loginUser);

authRouter.delete("/logout", logoutUser);

export { authRouter };
