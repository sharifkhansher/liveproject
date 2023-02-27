const {mongoose} = require('mongoose');
const studentSchema = new mongoose.Schema({
    
    subjectname:String,
    
    
})

module.exports = mongoose.model('studentsubject',studentSchema);