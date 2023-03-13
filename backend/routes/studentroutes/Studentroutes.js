const express = require('express');
const router = express.Router();

router.use(express.json())
//  router.use(express.json())
const { student, getdata } = require('../../controllers/studentcontroller/Studentcontroller');

router.get('/', student)
router.post("/", getdata)

module.exports =router;
