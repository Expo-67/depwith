export const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  // Add your password validation logic here
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example: Minimum 8 characters, at least one letter and one number

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    });
  }

  next();
};
