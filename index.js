if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express=require('express');
const app=express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const expressLayouts = require ('express-ejs-layouts');

const mainRouter = require('./routes/main')
const candidateRouter = require('./routes/vote')
const statsRouter = require('./routes/stats')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')


app.use(expressLayouts)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use('/',mainRouter)
app.use('/vote',candidateRouter)
app.use('/stats',statsRouter)

app.get('/profiles',(req,res)=>{
    res.render('cand/profiles')
})


const db = mongoose.connection;
db.on('error',err=>console.error(err))
db.once('open',()=>console.log('CONNECTION SET!'))


app.listen(4000, ()=>{
    console.log('IT IS RUNNING! :)');
})


/*
mongodb+srv://a-stupid-user_25:'+process.env.MONGOBD_ATLAS_PC+'@cluster0-mar0x.mongodb.net/test?retryWrites=true&w=majority
 Copy
*/