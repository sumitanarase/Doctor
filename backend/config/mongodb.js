import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database connected successfully"));
        mongoose.connection.on('error', (err) => console.error(`Database connection error: ${err.message}`));

        // Ensure the URI is defined
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined in the environment variables.");
        }

        // Connect to MongoDB
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
