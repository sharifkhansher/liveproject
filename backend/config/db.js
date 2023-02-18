// const {MongoClient}=require('mongodb')
const mongoose = require('mongoose');
// const url= 'mongodb://127.0.0.1:27017';
// console.log(process.env);
// console.log("=============>",process.env.MONGO_URL);
// console.log(" hello hii sharif khan hello");
// console.log("hello my dr=ear friend kese ho");
const ConnectDB= async()=>{
    try{
        // console.log(err);
        const connect = await mongoose.connect(process.env.MONGO_URL)
        // console.log("====>",connect);
    }
    catch(error){
        console.log("======>",error);
        process.exit(1)
    }
}
module.exports = ConnectDB;