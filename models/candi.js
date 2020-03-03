const mongoose = require('mongoose');
const candidate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    count:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('Poll',candidate)