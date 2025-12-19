var book = require("../model/books")

var getallbooks = async(req,res)=>{
    var allbooks = await book.find()
    res.status(200).json({allbooks})
    
}

var getsinglebook = async(req,res)=>{
    var singlebook = await book.findById(req.params.id)
    res.status(200).json({singlebook})
}

var updatebooks = async(req,res)=>{
   var updated= await book.findByIdAndUpdate(req.params.id,{
    name : req.body.name
   })
   res.status(200).json({updated})
}

var createnewbook = async(req,res)=>{
    var creating = await book.create({
        name : req.body.name
    })
    res.status(200).json({creating})
}

var deletingbook = async(req,res)=>{
    var deleted = await book.findByIdAndDelete(req.params.id,{
        name : req.body.name
    })
    res.status(200).json({deleted})
}

module.exports = {getallbooks,getsinglebook,deletingbook,createnewbook,updatebooks}