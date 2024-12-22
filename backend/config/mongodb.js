import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Listening for connection events
        mongoose.connection.on('connected', () => console.log("Database connected successfully"));
        mongoose.connection.on('error', (err) => console.error(`Database connection error: ${err.message}`));

        // Connecting to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
