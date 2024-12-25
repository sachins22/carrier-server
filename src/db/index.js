import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Fetch MongoDB URL from environment variables
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/musicPlayer';

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        const connectionInstance = await mongoose.connect(MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB connected! DB Host: ${MONGO_URL}`);
    } catch (error) {
        console.error("MongoDB connection FAILED:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export { connectDB };
