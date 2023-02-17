const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
   email: String,
   password: Number
});

module.exports = mongoose.model('login',studentSchema);