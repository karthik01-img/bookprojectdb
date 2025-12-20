require("dotenv").config()
var express = require("express")
var app = express()
var cors = require("cors")
app.use(express.json())
const connecttodb = require("./database/db")
var bookspath = require("./routes/book-routes")
var userpath = require("./routes/user-routes")

app.use("/books/api",bookspath)
app.use("/users/api",userpath)
const PORT = process.env.PORT || 10000

connecttodb()

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})