const {mongoose} = require('mongoose');
const todoschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'please add an fristname']
    },
    lastname:{
        type:String,
        required:[true,'plese add an lastname']
    },
    email:{
        type:String,
        required:[true,'plese add an email']

    },


    phone:{
    type:Number,
    required:[true,'plese add an phone']

    },

    pincode:{
        type:String,
        required:[true,'plese add an pinecode']

    },

    address:{
        type:String,
        required:[true,'plese add an address']

    },
    state:{
        type:String,
        required:[true,'plese add an state']
    }

})
module.exports = mongoose.model("todo",todoschema)