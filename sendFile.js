require('dotenv').config()

let path = require('path')
let expressModule = require('express')

let express = expressModule()
   
express.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'express_sendFile','index.html'))
    console.log(req)
})

express.listen(process.env.port,()=>{
    console.log(`your's server is been started on port ${process.env.port}`)
})