const mongoose = require('mongoose');
const register = mongoose.Schema;

const Voter = new register({ 
    firstName:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
        require:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    }

})

module.exports = mongoose.model('Voter',Voter)