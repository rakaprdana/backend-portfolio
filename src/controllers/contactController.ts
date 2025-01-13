import { Request, Response } from "express";
import Message from "../models/contact";

export const submitMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message has been submitted" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting message", error });
  }
};
