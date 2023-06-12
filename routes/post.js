const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  createPost,
  deleteOnePost,
  updatePost,
  getOnePost,
} = require("../controllers/post");

router.route("/").get(getAllPosts).post(createPost);

// router.route("/create");

router.route("/:_id").get(getOnePost).delete(deleteOnePost).put(updatePost);

module.exports = router;
