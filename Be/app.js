import express from "express";
import cors from "cors";
import productRouter from "./routers/product";
import mongoose from "mongoose";
import path from "path";

// Lấy đường dẫn hiện tại và chuyển đổi thành đường dẫn thư mục
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", productRouter);

mongoose.connect("mongodb://127.0.0.1:27017/Be-js");

export const viteNodeApp = app;
