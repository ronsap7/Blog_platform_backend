const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: String,
  authorPic: String,
  title: String,
  text: String,
  imgURL: String,
  timestamp: String,
});

module.exports = mongoose.model("post", postSchema);
