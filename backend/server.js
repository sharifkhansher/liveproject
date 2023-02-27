const express=require('express');
const { route } = require('./routes/userRoutes');
const {product} = require('./routes/productRoutes')
const app = express();
const multer = require('multer')
const path =require('path')


const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({extended:false}))
const errorHandler = require('./middleware/errorMiddleware')
app.use('/api/user',route,require('./routes/userRoutes'));
app.use('/api/product', require('./routes/productRoutes'))
app.use('/api/userauth', require('./routes/useraurtRoutes'))
app.use('/api/todos',require('./routes/todoroutes'))
app.use('/profile',express.static('upload/images'))
app.use('/api/student',require('./routes/studentroutes/Studentroutes'))
app.use('/api/country',require('./routes/studentroutes/studentcountryroutes'))
app.use('/api/course',require('./routes/studentroutes/courseroutes'))


const ConnectDB = require('./config/db');
const { profile } = require('console');
console.log("hello my dear friend");
ConnectDB()

 console.log(process.env.MONGO_URL);

const storage =multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
return cb (null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage:storage
})

// const upload = multer({
//     dest :'./upload/images'
// })


app.post('/upload',upload.single('profile'),(req,res)=>{
console.log(req.file);
res.json({
    success:1,
    profile_url:`http://localhost:8000/profile/${req.file.filename}`
})
})

app.listen(port,()=>{
    console.log(`port is colled${port}`);
})



// app.post ('/',(req,res)=>{
//     res.send("hello")
// })