const { models } = require("mongoose")
const { route } = require("../../routes/studentroutes/courseroutes")
const { json } = require('express')

const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User1 = require('../../Model/studentmodel/coursemodel');


const getcourse = asyncHandler (async(req,res)=>{
    let data = await User1.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const setcourse = asyncHandler(async(req,res)=>{
    const { course } = req.body
     let data = await User1.create({course}); 
    console.log("==User==>",User1);
     res.status(200).json({data})

})

module.exports = {
    getcourse,
    setcourse
}