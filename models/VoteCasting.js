const mongoose = require('mongoose');
const ballot = new mongoose.Schema({
        ballotFirstName:{
            type:String,
        },

        ballotLastName:{
            type:String,
        },

        voteCasted:{
            type:Array,
        }
    })

module.exports=mongoose.model('Ballot',ballot)