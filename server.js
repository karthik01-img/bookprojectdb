require("dotenv").config()
var express = require("express")
var app = express()
app.use(express.json())
const connecttodb = require("./database/db")
var path = require("./routes/book-routes")

app.use("/books/api",path)

const PORT = process.env.PORT || 10000

connecttodb()

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})