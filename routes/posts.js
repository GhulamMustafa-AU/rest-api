const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Retrieves all the posts from the DB
router.get("/", async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (err) {
    res.json({ err });
  }
});

// Retrieves a specific post from the DB
router.get("/:postID", async (req, res) => {
  try {
    const data = await Post.findById(req.params.postID);
    res.json(data);
  } catch (err) {
    res.json({ err });
  }
});

// Deletes a specific post from the DB
router.delete("/:postID", async (req, res) => {
  try {
    const response = await Post.deleteOne({ _id: req.params.postID });
    res.json(response);
  } catch (err) {
    res.json({ err });
  }
});

// Updates a specific post from the DB
router.patch("/:postID", async (req, res) => {
  try {
    const response = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { Title: req.body.Title, Description: req.body.Description } }
    );
    res.json(response);
  } catch (err) {
    res.json({ err });
  }
});

// Submits a post to the DB
router.post("/", async (req, res) => {
  const post = new Post({
    Title: req.body.Title,
    Description: req.body.Description,
  });
  try {
    const data = await post.save();
    res.json(data);
  } catch (err) {
    res.json({ err });
  }
});

// Exports all the routes as an object to app.js
module.exports = router;
