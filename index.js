const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = process.env.port || 5000

const SECRET_KEY="secret_key"

app.use(cors())
app.use(bodyParser.json())

//middleware
function verifyToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)

    if (token == undefined){
        return res.sendStatus(401)//unauthorized or unauthenticated
    }

    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err){
            return res.sendStatus(403)//forbidden
        }
        req.user = user
        next()
    })
}

//import route
const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use(express.static('./public'))
app.use('/posts',postsRoute)
app.use('/users',usersRoute)
app.post('/login',(req,res)=>{
    username=req.body.username
    password=req.body.password

    const token = jwt.sign({
        username,
        password
    },SECRET_KEY)
    res.json({
        token
    })


})
app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("register")
})
app.get('/dashboard',verifyToken,(req,res)=>{
    res.sendStatus("201")
})

// app.get()

app.listen(PORT,()=>{console.log(`Server listen at port ${PORT}`)})