const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
// const User = require('../Model/userauthmodel')
const todo = require("../Model/todomodel")

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1]
            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log("==================================>",decoded);
            // Get user from the token
            req.todo = await todo.findById(decoded.id).select('-password')
            next()
        }
        catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized,no token')
    }
})

module.exports = {
    protect,
}