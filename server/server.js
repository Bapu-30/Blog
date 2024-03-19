const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors'); // Enable CORS for cross-origin requests
const port = 3001; // You can change the port if needed
const mongoose = require('mongoose');

// blog Schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})

const blogs = mongoose.model("blogs", blogSchema)

//Set up default mongoose connection
const URI = 'mongodb://127.0.0.1:27017/blogs';
mongoose.connect(URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("something went wrong", err))


const blogData = JSON.parse(fs.readFileSync(path.join(__dirname, 'blogs.json'), 'utf-8'));


// API Endpoint to get all blog posts
app.get('/home', cors(), (req, res) => {
    res.send("<h2>hello</h2>")
})
app.get('/posts', cors(), (req, res) => {
    res.json(blogData);
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error for debugging
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
