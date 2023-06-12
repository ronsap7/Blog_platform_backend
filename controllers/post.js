const Post = require("../models/Post");

/// create a new post
const createPost = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    const { author, title, text } = req.body;
    // console.log("author: ", req.files.authorPic);
    // console.log("imgURL: ", req.files.imgURL);
    // const authorPic =
    //   "https://backend-blogplatform.onrender.com/static/" + req.files.authorPic[0].filename;
    // const imgURL =
    //   "https://backend-blogplatform.onrender.com/static/" + req.files.imgURL[0].filename;
    const authorPic =
      "https://backend-blogplatform.onrender.com/static/" +
      req.files.authorPic[0].filename;
    const imgURL =
      "https://backend-blogplatform.onrender.com/static/" +
      req.files.imgURL[0].filename;

    const timestamp = new Date();
    const post = await Post.create({
      author,
      authorPic,
      title,
      text,
      imgURL,
      timestamp,
    });
    res.status(201).json({
      data: post,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts.length) return res.status(200).json({ msg: "No posts found" });
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get one post by id

const getOnePost = async (req, res) => {
  const { _id } = req.params;
  try {
    const post = await Post.findById(_id);
    if (!post) return res.status(404).json({ msg: "No post found" });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a post
const deleteOnePost = async (req, res) => {
  try {
    const { _id } = req.params;
    const post = await Post.findByIdAndDelete(_id);

    if (!post) {
      res.status(404).json({ msg: "No post found" });
    } else {
      res.status(200).json({ msg: "Post Deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a Post

const updatePost = async (req, res) => {
  const { _id } = req.params;
  const { author, authorPic, title, text, imgURL, timestamp } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      _id,
      {
        author,
        authorPic,
        title,
        text,
        imgURL,
        timestamp,
      },
      { new: true }
    );
    if (!post) return res.status(404).json({ msg: "This post can't be found" });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  deleteOnePost,
  updatePost,
  getOnePost,
};
