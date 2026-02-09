import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

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
     const hashPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({ firstName, lastName, email, password:hashPassword});
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
