const express=require('express');
const router=express.Router();
const Voter = require('../models/voter');
const BallotBox=require('../models/VoteCasting')
const Polling = require('../models/candi');
//ignore the registration for now

router.get('/',(req,res)=>{
    res.redirect('VisualData.html')
})

module.exports=router