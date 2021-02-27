import mongoose from 'mongoose';

// Schema Setup
var blogSchema = new mongoose.Schema({
    name : String,
    email: String,
    phone : Number,
})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

