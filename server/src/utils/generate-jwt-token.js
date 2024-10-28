import jwt from "jasonwebtoken"; // we import jwt library

export const generateJWTToken = (res, user) => {
  //function definition of generateJWTToken
  //Token generation
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  //store the token in the cookies
  res.cookie(process.env.AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};
