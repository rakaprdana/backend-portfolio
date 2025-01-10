import mongoose, { Model } from "mongoose";

interface Contact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema<Contact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact: Model<Contact> = mongoose.model<Contact>(
  "contact",
  ContactSchema
);
export default Contact;
