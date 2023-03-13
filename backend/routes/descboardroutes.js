const express= require('express');
const app = express()
const router = express.Router()
router.use (express.json())
const {alldata} = require("../controllers/descboardcontroller")

router.get("/",alldata)

module.exports = router