var mongoose = require("mongoose")

var userschema =  new mongoose.Schema({
    name : String

})

module.exports = mongoose.model("booklibs",userschema)