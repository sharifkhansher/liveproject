const userSchema = require("../Model/userSchema")
//des registreUser new users
//routes POST /api/ usreauth
//access public 

const registerUser =(req,res)=>{
    const{name,email,password}=req.body
    if(!name || !email || !password){
       res.status(400) ;
       throw new Error("plese add all fileds")
    }
    res.json({massage: req.body})

}


//desloginusres new users
//routes POST /api/ usreauth
//access public 

const loginUsre =(req,res)=>{
    res.json({massage:"login usre"})
}


//des getMe new users
//routes POST /api/ usreauth
//access public 

const getMe =(req,res)=>{
    res.json({massage:"get data "})
}
module.exports={
    registerUser,
    loginUsre,
    getMe,
}
 




// des loginUsre new userSchema
// routersPOST /api/ usreaurt/login 
// access Public
