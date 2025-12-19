require("dotenv").config()
var express = require("express")
var app = express()
app.use(express.json())
const connecttodb = require("./database/db")
var path = require("./routes/book-routes")

app.use("/books/api",path)

var PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("its live");
})
connecttodb()