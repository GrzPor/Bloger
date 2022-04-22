const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descripton: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    edited: {
        type: String,
        default: null,
    },
    tags: {
        type: String,
        default: "#all"
    },
    categories: {
        type: String,
    },
    author: {
        type: String,
        default: "Grzegorz Poradko"
    }
})

module.exports = mongoose.model("Post", postSchema)