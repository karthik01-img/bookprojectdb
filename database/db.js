var mongoose = require("mongoose")

var connecttodb = async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to database");
    }
    catch(error){
        console.log("error");
    }
}

module.exports = connecttodb