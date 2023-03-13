const express= require('express');
const router = express.Router();
router.use(express.json())

const { getproduct, addproduct, updateproduct, deleteproduct } = require("../controllers/productcontrollers");



router.get('/getproduct',getproduct)
router.post('/insertproduct',addproduct)
router.put('/updateproduct/:_id',updateproduct)
router.delete('/deleteproduct/:_id',deleteproduct)


module.exports = router;