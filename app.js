const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");

// Middlewares & External Routes
app.use(express.json());
app.use(cors());
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to  DB");
  }
);

// Listen to the server
app.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000");
});
