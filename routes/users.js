const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("We are on users")
})

router.post('/login',(req,res)=>{
    let username = req.body.username
    let password = req.body.password
})

router.get('/specific',(req,res)=>{
    res.send("we are on specific user")
})

module.exports=router