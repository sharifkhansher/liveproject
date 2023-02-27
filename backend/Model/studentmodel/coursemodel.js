const {mongoose} = require('mongoose');
const studentSchema = new mongoose.Schema({
    course:Object 
})

module.exports = mongoose.model('course',studentSchema);