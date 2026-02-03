import { User } from "../models/userModel";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = await User.create({ firstName, lastName, email, password });
    await newUser.save();
    return res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        user: newUser,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};
