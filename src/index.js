// ----------------------------
// Import required packages
// ----------------------------
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // for cross-origin requests
require('module-alias/register');
// ----------------------------
// Initialize app
// ----------------------------
const app = express();

// ----------------------------
// Load environment variables
// ----------------------------
dotenv.config();

// ----------------------------
// Middleware setup
// ----------------------------

// ✅ Parse JSON request bodies (important for Postman)
app.use(express.json());

// ✅ Enable CORS (allows requests from Postman / frontend)
app.use(cors());

// ✅ Optional: parse URL-encoded data if using forms
app.use(express.urlencoded({ extended: true }));

// ----------------------------
// Import routes
// ----------------------------
const { router } = require('@/routes'); // make sure you export "router" properly
app.use('/api', router);

// ----------------------------
// Connect to MongoDB
// ----------------------------
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// ----------------------------
// Define server port
// ----------------------------
const PORT = process.env.PORT || 3000;

// ----------------------------
// Start the server
// ----------------------------
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
