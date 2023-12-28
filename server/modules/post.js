const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    Title: String,
    Content: String,
    Summary: String,
    Image: Buffer, // Store the image as a Buffer
    ImageType: String // Store the image type (e.g., 'image/jpeg', 'image/png')
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;