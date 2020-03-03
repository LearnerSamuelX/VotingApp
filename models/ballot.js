const mongoose = require('mongoose');
const ballot = new mongoose.Schema({
        ballotFirstName:{
            type:String,
            unique:true
        },

        ballotLastName:{
            type:String,
            unique:true
        },

        voteCasted:{
            type:Array,
            unique:true
        },
    })

    module.exports=mongoose.model('Ballot',ballot)