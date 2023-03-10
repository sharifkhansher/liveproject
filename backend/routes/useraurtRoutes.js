const express = require('express');
const router = express.Router();
const {protect}= require('../middleware/authmiddeware')
const { registeruser,  loginuser, getMe } = require('../controllers/useraurtcontrollers')
router.use(express.json())
router.post('/',registeruser);
router.post('/login', loginuser);
router.get('/me',protect,getMe);


module.exports = router;
