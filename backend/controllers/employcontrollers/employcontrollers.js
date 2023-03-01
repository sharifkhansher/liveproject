const employs = require('../../Model/employmodel/employmodel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getemploy = async(req,res)=>{
    let data = await employs.find();
    console.log("======>",data);
    res.status(200).json(data)

}



const postemploy = async(req,res)=>{
    const { employId, employName, employEmail, employNumber, employDob, employMent, employAddress } = req.body
    let cheackemail = employEmail.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        throw new Error ("please add the @gmail.com")
    }
    const data = await employs.create({
        employId, 
        employName, 
        employEmail, 
        employNumber, 
        employDob, 
        employMent, 
        employAddress
    })
    res.status(201).json({data})
}

const serchemploy = async(req,res)=>{
    let data = await employs.findById(req.params._id);
    res.status(200).json(data);
    console.log(req.params.id);
 }


 const updateemploy = async (req,res)=>{
    let data = await employs.findById(req.params._id)
    if(!data){
    res.status(200).json({massage:"id is not define"})
}
let updatedata = await employs.findByIdAndUpdate(req.params._id,req.body,{
    new:true
})
res.status(200).json(updatedata)
 }


 const deleteemploy =async(req,res)=>{
    const data = await employs.findById(req.params._id);
    if(!data){
        res.status(300).json({massage:"enter id"})
    }
    await data.remove();
    res.status(400).json({massage:"data is delete"})
 }


module.exports = {
    getemploy,
    postemploy,
    serchemploy,
    updateemploy,
    deleteemploy

}