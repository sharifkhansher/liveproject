const express = require('express')
const router = express.Router();
router.use(express.json())


const {getcourse,setcourse} = require('../../controllers/studentcontroller/coursecontroller');

router.get('/', getcourse);
router.post('/',setcourse);

module.exports =router;
