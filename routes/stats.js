const express=require('express');
const router=express.Router();
const Voter = require('../models/voter');
const Ballot = require('../models/ballot')
const Polling = require('../models/candi');
//ignore the registration for now

router.get('/',(req,res)=>{
    res.render('stats/index')
})

router.post('/voted',(req,res)=>{
    //change this part
    res.render('stats/testing')
})


module.exports=router