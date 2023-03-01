const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {get,post} = require("../controllers/signupcontroller")
// const {protect} = require("../middleware/Singupmiddleware")

Router.post("/",post)
Router.get("/",get)


module.exports = Router