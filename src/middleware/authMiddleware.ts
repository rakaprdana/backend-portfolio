import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: string;
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied! No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = (decoded as any).id;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
