const express = require("express")
const router = express.Router()
const postModel = require("../models/post")

// Get all posts
router.get("/", async (req, res) => {
    try {
        const post = await postModel.find()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({message:err})
    }
})

// Get one post
router.get("/:id", (req, res) => {

})

// Create one post
router.post("/", async (req, res) => {
    const post = new postModel({
        title: req.body.title,
        descripton: req.body.descripton,
        tags: req.body.tags,
        categories: req.body.categories
    })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({message:err})
    }
})

// Update one post
router.put("/:id", (req, res) => {

})

// Delete one post
router.delete("/:id", (req, res) => {

})
module.exports = router