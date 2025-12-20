var user = require("../model/user")
var bcrypt = require("bcrypt")


var createnewuser = async(req,res)=>{
    try{
        var {username,email,password,role} = req.body
        var existuser = await user.findOne({$or :[{username,email}]})
        if(existuser){
            res.status(200).json({message: "user already exists"})
        }
        var salt = await bcrypt.genSalt(10)
        var hashedpass = await bcrypt.hash(password,salt)

        var newuser = await user.create({
            username,
            email,
            password : hashedpass,
            role
        })
        res.status(200).json({msg : "user created successfully"})
    }
    catch(error){
        console.log("error",error);
        res.status(500).json({message: "error occured"})
    }
}

module.exports = createnewuser