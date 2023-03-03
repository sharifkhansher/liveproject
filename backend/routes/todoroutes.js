const express = require('express');
const router = express.Router();
 const {protect}= require('../middleware/authmiddeware')
const { registeruser,  loginuser, getMe,update,deletes } = require('../controllers/todocontroller')
router.use(express.json())
router.post('/',registeruser);
router.post('/login', loginuser);
router.get('/me',getMe);
router.put('/:_id',update)
router.delete('/:_id',deletes)

module.exports = router;