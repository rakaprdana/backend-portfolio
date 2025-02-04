import bcrypt, { hash } from "bcrypt";
import User from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

interface LoginRequestBody {
  username: string;
  password: string;
}

export const register = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
): Promise<any> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1hr" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};
