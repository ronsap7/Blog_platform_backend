const express = require("express");
const app = express();
const cors = require("cors");

require("colors");
require("dotenv").config();
const connectDB = require("./dbinit");
const postRoutes = require("./routes/post");
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "./uploads")));

connectDB();

// Middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//my routes
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to API");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
