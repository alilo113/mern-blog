const mongoose = require("mongoose")
 
const postSchema = new mongoose.Schema({
    Title: String,
    Content: String,
    Summary: String
})

const post = mongoose.model("post", postSchema)
module.exports = post