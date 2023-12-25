const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const post = require("./modules/post");

mongoose.connect("mongodb://127.0.0.1:27017/postsDatabase")
.then(() => {
  console.log("Connected to mongo database");
})
.catch((error) => {
  console.error("Connection error:", error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all origins
app.use(cors());

app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, summary } = req.body;
    const newPost = new post({ Title: title, Content: content, Summary: summary });
    console.log(newPost);
    const savedPost = await newPost.save();
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ error: "Error creating the post" });
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Fetch posts error:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

app.listen(port, () => {
  console.log(`The server listens to port ${port}`);
});