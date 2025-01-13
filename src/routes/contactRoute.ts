import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { submitMessage } from "../controllers/contactController";

const router = express.Router();

router.post("/contact", submitMessage);
export default router;
