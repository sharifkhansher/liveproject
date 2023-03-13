const express = require('express');
const router = express.Router();

// router.use(express.json());
router.use(express.json())
const { getemploy,serchemploy, postemploy,updateemploy,deleteemploy } = require('../../controllers/employcontrollers/employcontrollers');

router.get('/me', getemploy)
router.get('/:_id',serchemploy)
router.post("/", postemploy)
router.put('/:_id',updateemploy)
router.delete('/:_id',deleteemploy)

module.exports =router;
