const express=require('express')
const router=express.Router()
const Polling = require('../models/candi')
const Voter = require('../models/voter')

router.get('/',(req,res)=>{
    res.render('main')
})

module.exports=router;