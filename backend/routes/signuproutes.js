const express= require('express');
const app = express()
const router = express.Router()
router.use(express.json())
const {get,post} = require("../controllers/signupcontroller")
// const {protect} = require("../middleware/Singupmiddleware")

router.post("/",post)
router.get("/",get)


module.exports = router