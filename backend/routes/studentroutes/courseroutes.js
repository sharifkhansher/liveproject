const express = require('express')
const router = express.Router();
router.use(express.json())


const {getcourse,setcourse,searchdata} = require('../../controllers/studentcontroller/coursecontroller');

router.get('/', getcourse);
router.post('/',setcourse);
router.get('/:_id',searchdata)

module.exports =router;
