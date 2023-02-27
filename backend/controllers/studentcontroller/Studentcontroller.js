const jwt = require('jsonwebtoken')
const db = require('../../config');
db();
const bcryt = require('bcryptjs')
const mongodb = require('mongodb');
const user = require('../../Model/studentmodel/Studentmodel')
const asyncHandler = require('express-async-handler');


const student =asyncHandler(async(req,res)=>{
    let data =await user.find();
    res.send (data)

    })

const getdata = asyncHandler(async(req,res)=>{
    const {subjectname} = req.body
    let data  = await user.create({subjectname})
    // console.log('hello sharif khan');
    res.json({
        data
    })
})
module.exports={
    student,
    getdata,
}