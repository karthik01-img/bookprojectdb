var user = require("../model/user")
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")


var createnewuser = async(req,res)=>{
    try{
        var {username,email,password,role} = req.body
        var existuser = await user.findOne({$or :[{username,email}]})
        if(existuser){
         return   res.status(200).json({message: "user already exists"})
        }
        var salt = await bcrypt.genSalt(10)
        var hashedpass = await bcrypt.hash(password,salt)

        var newuser = await user.create({
            username,
            email,
            password : hashedpass,
            role
        })
       return res.status(200).json({msg : "user created successfully"})
    }
    catch(error){
        console.log("error",error);
      return  res.status(500).json({message: "error occured"})
    }
}

var loginuser = async(req,res)=>{
    try{
var {username,password}= req.body
var checkuser = await user.findOne({username})
if(!checkuser){
    return res.status(404).json({message : "invalid creditintials"})
}
var checkpassword = await bcrypt.compare(password,checkuser.password)
if(!checkpassword){
    return res.status(404).json({message : "invalid credintials"})
}

var token = jwt.sign({
    userid : checkuser._id,
    username : checkuser.username,
    role : checkuser.role
},process.env.JWT_TOKEN,{expiresIn : "2h"})

res.status(200).json({messgae :"login successfull", mytoken : token})
    }
    catch(error){
        console.log("error",error);
    }
}

module.exports = {createnewuser,loginuser}