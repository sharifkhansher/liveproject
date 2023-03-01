const mongoose = require('mongoose');

const employs = new mongoose.Schema({
    employId:{type:String},
    employName:{type:String},
    employEmail:{type:String},
    employNumber:{type:String},
    employDob:{type:String},
    employMent:{type:String},
    employAddress:{type:String}


});

module.exports = mongoose.model('employs',employs);