import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./src/config/db";
import authRoutes from "./src/routes/authRoute";
import contactRoutes from "./src/routes/contactRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
