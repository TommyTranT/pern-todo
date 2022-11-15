const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8080;

// Connect to database
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})