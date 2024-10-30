const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Ensure this file has the correct logic for connecting to MongoDB
const apiRoutes = require("./routes/apiRoutes");

// Load environment variables from .env file
dotenv.config();

// Log the MongoDB URI for debugging (remove in production)
console.log("MongoDB URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database and start the server
const startServer = async () => {
    try {
        // Establish a connection to MongoDB
        await connectDB();
        console.log("Database connected successfully.");

        // Set up API routes
        app.use("/api", apiRoutes);

        // Start Express server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1); // Exit the app if DB connection fails
    }
};

// Call the function to start the server and connect to the database
startServer();
