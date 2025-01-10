import mongoose, { Model } from "mongoose";
interface User extends Document {
  username: string;
  password: string;
}
const UserSchema = new mongoose.Schema<User>({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const User: Model<User> = mongoose.model<User>("User", UserSchema);
export default User;
