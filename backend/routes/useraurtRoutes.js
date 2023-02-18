const express = require('express');
const router = express.Router();
const { registerUser, loginUsre, getMe } = require('../controllers/useraurtcontrollers')

router.post('/',registerUser);
router.post('/login',loginUsre);
router.get('/me',getMe)
module.exports = router;