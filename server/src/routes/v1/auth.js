// here we will handle authentication of the users routes for user registration (/register) and login (/login).

import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/auth.js";
//import { passwordValidator } from "../../../middleware/validator.js";
const authRouter = Router();

// /api/v1/auth/register
authRouter.post("/register", registerUser);

// /api/v1/auth/login
authRouter.post("/login", loginUser);

export { authRouter };
