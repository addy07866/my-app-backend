import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();  // Load environment variables

const app = express();
app.use(cors());  // Allow frontend-backend communication
app.use(express.json());  // Parse JSON request bodies

// ✅ Improved MongoDB Connection with Error Handling
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit process with failure
    }
};
connectDB();

app.get("/", (req, res) => {
    res.send("API is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
