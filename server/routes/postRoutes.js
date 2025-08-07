const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const Post = require('../models/Post');

// Create a new post
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const newPost = new Post({
      user: req.user.id,
      content: req.body.content,
    });

    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// all posts
router.get("/all", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name");
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});


module.exports = router;