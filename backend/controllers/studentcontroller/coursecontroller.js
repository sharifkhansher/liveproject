const { models } = require("mongoose")
const { route } = require("../../routes/studentroutes/courseroutes")
const { json } = require('express')

const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../routes/studentroutes/courseroutes');


const getcourse = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const setcourse = asyncHandler(async(req,res)=>{
    const { course } = req.body
    let data = await User.create({course}); 
    console.log("====>",data);
     res.status(200).json({data})

})

module.exports = {
    getcourse,
    setcourse
}