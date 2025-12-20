var mongoose = require("mongoose")

var userschema =  new mongoose.Schema({
     title : String,
    name : String,
    author : String,
    price : Number

})

module.exports = mongoose.model("booklibs",userschema)

