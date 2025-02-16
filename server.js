import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());  // Allow cross-origin requests

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/")
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

// API Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("API is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
