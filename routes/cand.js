const express=require('express');
const router=express.Router();
const Voter=require('../models/voter');
const BallotBox=require('../models/VoteCasting')
// const dataVisual=require('../models/dataVisual')
const fs = require('fs')

//ignore the registration for now
var newVoter=''
var newBallot =''
var dataForVisualizingA = ''
var dataForVisualizingB = ''
var voteCollection= [{"name":"A","vote":0},{"name":"B","vote":0}]      //[{A:""},{B:""}]

router.get('/',(req,res)=>{
    res.render('cand/profiles')
})

router.get('/loggedin',async (req,res)=>{
    res.render('cand/index',{
        voterFirstName:newVoter.firstName,
        voterLastName:newVoter.lastName,
        voterEmail:newVoter.email
    })
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

router.get('/loggedin/testing',async (req,res)=>{
    dataForVisualizingA = await BallotBox.find({voteCasted:["A"]})
    dataForVisualizingB = await BallotBox.find({voteCasted:["B"]})
    // voteCollection = await new dataVisual({
    //     A:dataForVisualizingA.length,
    //     B:dataForVisualizingB.length
    // }).save()
    voteCollection[0].vote=dataForVisualizingA.length
    voteCollection[1].vote=dataForVisualizingB.length
    res.send(voteCollection)
})

//testing
router.post('/loggedin/testing',async (req,res)=>{
    const filledBallot = new BallotBox({
        ballotFirstName:newVoter.firstName,
        ballotLastName:newVoter.lastName,
        voteCasted:req.body.ballot
        })
    
    newBallot = await filledBallot.save()
    res.send(newBallot)
})

// Updating json file for data visualization
router.get('/loggedin/testing/stats',(req,res)=>{
    // res.send(dataForVisualizing)
    fs.writeFile('public/tryList.json',JSON.stringify(voteCollection,null,2),(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('It has been saved')
        }
    })
    res.redirect('/')
})


//  \(**?)/
//deleting database
router.get('/loggedin/testing/voter/delete',async (req,res)=>{
    await Voter.remove({})
    res.send('Voter DB reset completed! :]')
})

router.get('/loggedin/testing/ballotBox/delete',async (req,res)=>{
    await BallotBox.remove({})
    res.send('BallotBox DB reset completed! :]')
})


module.exports=router