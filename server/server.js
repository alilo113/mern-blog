const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Post = require("./modules/post");

mongoose.connect("mongodb://127.0.0.1:27017/postsDatabase")
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, summary } = req.body;

    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const image = req.files.image; // Access the uploaded file

    const newPost = new Post({ Title: title, Content: content, Summary: summary, Image: image.data });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ error: "Error creating the post" });
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Fetch posts error:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});