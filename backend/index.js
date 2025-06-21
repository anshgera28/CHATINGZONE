import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import messageRoute from "./routes/messageRoutes.js";
import userRoute from "./routes/userRoute.js";
import { app, server } from "./socket/socket.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
