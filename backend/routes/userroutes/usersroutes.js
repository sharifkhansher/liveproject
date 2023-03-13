const express = require('express');
const app = express()
const router = express.Router()
router.use(express.json())
const { postuser, findpost, deleteusre, getuser } = require("../../controllers/usercontroller/userscontroller")

router.post("/", postuser)
router.get("/", getuser)
router.post("/insart/:_id", findpost)
router.delete("/:_id", deleteusre)


module.exports = router