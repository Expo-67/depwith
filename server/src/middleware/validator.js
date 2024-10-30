//function validates the data for a new user user registration
export const validateUserRegistration = (req, res, next) => {
  const { username, email, phone, password } = req.body;

  //validating the fields- if any field is missing it throws a 404
  if (!username || !email || !phone || !password) {
    res.status(400).json({
      message: "All fields are required.",
    });
    return;
  }

  if (username.trim() === "") {
    //ensure username is not an empty string after trimming spaces
    res.status(400).json({
      message: "Username cannot be empty",
    });
    return;
  }
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!emailRegex.test(email)) {
    res.status(400).json({
      message: "Email is invalid 3",
    });
    return;
  }
  next();
};

//validate user login here
export const validateUserLogin = (req, res, next) => {
  console.log("Validating user login");
  next();
};
