
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello from Node.js deployed on Render!");
});

// Health check route
app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
