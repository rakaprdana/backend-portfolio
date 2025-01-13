import mongoose, { Model } from "mongoose";

interface Message extends Document {
  name: string;
  email: string;
  message: string;
}

const MessageSchema = new mongoose.Schema<Message>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Message: Model<Message> = mongoose.model<Message>(
  "message",
  MessageSchema
);
export default Message;
