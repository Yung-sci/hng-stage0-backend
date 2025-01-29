const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // Default to port 3000

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  const response = {
    email: "yungsci101@gmail.com", // HNG registered email
    current_datetime: new Date().toISOString(), // ISO 8601 format (UTC)
    github_url: "https://github.com/Yung-sci/hng-stage0-backend" // Replace with your GitHub repo URL
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});