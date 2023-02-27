
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
const error = require('../middleware/authmiddeware')
const User = require('../Model/todomodel')
const { json } = require('express');





//des registeruser  new users
// routes post /api/userAuth
// access public

const registeruser = asynchandler(async (req, res) => {
    const { firstname, lastname, email, phone,pincode, address ,state } = req.body
    if (!firstname || !lastname || !email ||!phone ||!pincode ||!address ||!state) {
        res.status(400)
        throw new Error("please add all fields");
    }
    if(generateToken){
        let data =await User.create({firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,phone:req.body.phone,pincode:req.body.pincode,address:req.body.address,state:req.body.state})
    }
        

       const data =  await User.create({
        firstname,
        lastname,
        email,
        phone,
        pincode,
        address,
        state,
        
        // token:generateToken(User._id) 
})



       if(data){
        res.status(201).json({
            _id:data.id,
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            phone:data.phone,
            pincode:data.pincode,
            address:data.address,
            state:data.state,
            token:generateToken(data._id) 
        })
       }else{
        res.status(400)
        throw new Error("data is already exits")
       }
    })

//des loginuser  new users
// routes post /api/userAuth/login
// access public
const loginuser = asynchandler(async (req, res) => {
    const {  email,pincode, } = req.body
  const user1 = await User.findOne({email})
//   console.log("====dsds===>>>",user1);
  if(user1 && (bcrypt.compare(pincode,user1.pincode))){
    res.json({
        _id:user1.id,
        firstname:user1.firstname,
        lastname:user1.lastname,
        email:user1.email,  
        phone:user1.phone,
        pincode:user1.pincode,
        address:user1.address,
        state:user1.state,
        token:generateToken(user1._id) 
    })
  } else{
    res.status(400)
        throw new Error("Invalid credentials")
  }
    

    // res.json({message:"login user"});

})

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn :'30d',
   })
   }
//des getMe  new users
// routes post /api/userAuth/me
// access public
const getMe = asynchandler(async (req, res) => {
   const {_id,firstname,lastname, email,phone,pincode,address,state} = await User.findById(req.todo.id)
    res.status(201).json({
  id:_id,
  firstname,
  lastname,
  email,
  phone,
  pincode,
  address,
  state,
  token:generateToken(User._id)

    })
    })
    const update= asynchandler( async (req,res)=>{
        let findid = await User.findById(req.params._id);
        if(!findid){
            res.status(400);
            res.send("user not found");
        }
        const update = await User.findByIdAndUpdate(req.params._id,req.body,{
            new : true
        })
        console.log("=====>",update);
        res.status(200).json({message : `updatedata ${req.params._id}`})
    })

    const deletes = asynchandler( async(req,res)=>{
        let findid = await User.findById(req.params._id);
        if(!findid){
            res.status(400);
            res.send("user not found");
        }
         await findid.remove();
    
       
        res.status(200).json({message: `delete data ${req.params._id}`});
    })
    





module.exports = {
    registeruser,
    loginuser,
    getMe,
    update,
    deletes,
}