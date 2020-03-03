const express=require('express');
const router=express.Router();
const Voter = require('../models/voter');
const Ballot = require('../models/ballot')

//ignore the registration for now
var newVoter=''

router.get('/',(req,res)=>{
    res.render('cand/profiles')
})

router.get('/loggedin',async (req,res)=>{
    res.render('cand/index')
})

router.post('/loggedin',async (req,res)=>{
    const register = new Voter({
        firstName:req.body.first_Name,
        lastName:req.body.last_Name,
        email:req.body.email,
    })

    if (req.body.first_Name!==''||req.body.last_Name!==''||req.body.email!==''){
        newVoter = await register.save()

        res.render('cand/index',{
            voterFirstName:newVoter.firstName,
            voterLastName:newVoter.lastName,
            voterEmail:newVoter.email
        })
        
    }else{
        res.redirect('/')
    }

})
router.get('/loggedin/testing',(req,res)=>{
    //res.send(newBallot)
    Ballot.find((error,data)=>{
        if(error){
            console.log('Found some error'+error)
        }else{
            res.json(data)
        }
    })
})

//testing
router.post('/loggedin/testing',async (req,res)=>{
    //res.send(newVoter)
    const ballot_info = new Ballot({
        ballotFirstName:newVoter.firstName,
        ballotLastName:newVoter.lastName,
        voteCasted:req.body.ballot
    })
    newBallot = await ballot_info.save()
    res.send(newBallot)
})


module.exports=router