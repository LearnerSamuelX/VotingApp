const mongoose = require('mongoose');
const voteCollection = new mongoose.Schema({
    A:{
        type:Number,
    },

    B:{
        type:Number,
    },

});

module.exports=mongoose.model('Collection',voteCollection)