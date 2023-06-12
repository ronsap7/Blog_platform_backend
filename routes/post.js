const express = require("express");
const router = express.Router();
const upload = require("../utils/multerUpload");

const {
  getAllPosts,
  createPost,
  deleteOnePost,
  updatePost,
  getOnePost,
} = require("../controllers/post");

router.route("/").get(getAllPosts);
router.post(
  "/",
  upload.fields([{ name: "authorPic" }, { name: "imgURL" }]),
  createPost
);

// router.route("/create");

router.route("/:_id").get(getOnePost).delete(deleteOnePost).put(updatePost);

module.exports = router;
