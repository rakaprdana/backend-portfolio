import mongoose from "mongoose";

class DatabaseConfig {
  connectDB = async (): Promise<void> => {
    try {
      if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URL is undefined. Please check your .env file");
      }
      await mongoose.connect(process.env.MONGO_URI, {});
      console.log("MongoDB has been connected");
    } catch (error: any) {
      console.error("Connection error:", error.message);
    }
  };
}

export default new DatabaseConfig();
