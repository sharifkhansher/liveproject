
//  const db = require('../config');
//  db();
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const product1 = require('../Model/productmodel');
const asyncHandler = require('express-async-handler');



const getproduct = async (req, res) => {
    let data = await product1.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
}



const addproduct = asyncHandler(async (req, res) => {

    const { title, dis, price, reting,img,color ,size} = req.body
    if (!title && !dis && !price && !reting && !color && !img && !size  ) {
        res.status(300).json({ message: "Please add all Filed" })
    }
    let data = await product1.create({ 
        title,
        dis,
        price,
        reting,
        color,
        img, 
        size,
    });
    console.log("====>", data);
    res.status(200).json(data)
})

const updateproduct = asyncHandler(async (req, res) => {
    let findid = await product1.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }

    const updateusers = await product1.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=====>", updateusers);
    
    res.status(200).json({ message: `updatedata ${req.params._id}` })
})
const deleteproduct = asyncHandler(async (req, res) => {
    let findid = await product1.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }
    await findid.remove();


    res.status(200).json({ message: `delete data ${req.params._id}` });
})

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
// }

module.exports = {
    getproduct, addproduct, updateproduct, deleteproduct
}
