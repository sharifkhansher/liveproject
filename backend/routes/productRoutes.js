const express= require('express');
const Router = express.Router();
Router.use(express.json())

const { getproduct, addproduct, updateproduct, deleteproduct } = require("../controllers/productcontrollers");



Router.get('/getproduct',getproduct)
Router.post('/insertproduct',addproduct)
Router.put('/updateproduct/:_id',updateproduct)
Router.delete('/deleteproduct/:_id',deleteproduct)


module.exports = Router;