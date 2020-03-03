const mongoose = require('mongoose');
const register = mongoose.Schema;

const Voter = new register({ 
    firstName:{
        type:String,
        unique:true,
        required:true,
    },

    lastName:{
        type:String,
        unique:true,
        require:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    vote:{
        type:Number
    }
})

module.exports = mongoose.model('Voter',Voter)