const express = require("express")
const mongoose = require("mongoose")
const app = express()
const postsRouter = require("./routes/posts")

const PORT = 8080

mongoose.connect("mongodb+srv://terson:qweqwe@cluster0.j0mtd.mongodb.net/Bloger?retryWrites=true&w=majority")
const db = mongoose.connection
db.on("error", (err) => console.error(err))
db.once("open", () => console.log("Database connected successfully"))

app.use(express.json())
app.use("/posts", postsRouter)

app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(
    PORT,
    () => console.log(`Server is running on: http://localhost:${PORT}`)
)