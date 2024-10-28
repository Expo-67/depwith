import { User } from "../db/models/User.js";
import bcrypt from "bcryptjs";

//Register user function
export const registerUser = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body; // data sent by client for user registration

    // Password hashing
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    }); // This creates a new user in the database using the hashed password

    res.status(201).json(user);
  } catch (error) {
    console.log({ MongooseError: error });

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//Login user function
export const loginUser = async (req, res) => {
  const { username, password } = req.body; // Extracting request data

  const user = await User.findOne({
    username,
  }); // find the user

  if (!user) {
    res.status(400).json({
      message: "Incorrect credentials - username",
    });
    return;
  } //handle incorrect username

  const passwordsMatch = await bcrypt.compare(password, user.password); // password comparison
  // const passwordsMatch2 = bcrypt.compareSync(password, user.password);

  // 12345
  // $2a$10$7qDwKWKPCgH9b8ODV6kU8exUthqcEQ0GsMvRwpk/mLwJMz2FVU31q
  if (!passwordsMatch) {
    res.status(400).json({
      message: "Incorrect credentials - password",
    });
    return;
  }

  // Login is okay

  res.cookie(process.env.AUTH_COOKIE_NAME, JSON.stringify(user.toObject())); // setting a cookie upon successful login

  res.json({
    message: "Login Successful",
  });
};
