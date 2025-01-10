import bodyParser from "body-parser";
import dotenv from "dotenv";
import Express from "express";
import configDB from "./src/config/db";
import cors from "cors";
import corsOptions from "./src/config/corsConfig";
dotenv.config();

const app = Express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
configDB.connectDB();
