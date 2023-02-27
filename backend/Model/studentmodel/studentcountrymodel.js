const {mongoose} = require('mongoose');
const studentSchema = new mongoose.Schema({
    countryname:{
    type:String,
    },
    countrycode:{
        type:String,
    },
    countryschool:{
        type:Object,
    }
    
})

module.exports = mongoose.model('countryname',studentSchema);