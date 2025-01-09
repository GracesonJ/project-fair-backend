// import .env
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

//import router
const router = require('./router')

// import connection
require('./connection')

// create server
const pfServer = express()

//server using cors
pfServer.use(cors())


//Parse the data -> return middleware to parse the data
pfServer.use(express.json())

// use router
pfServer.use(router)

// Exporting upload folder
pfServer.use('/upload', express.static('./uploads'))

// port
const PORT = 4000 || process.env.PORT

//listen
pfServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
    
}) 

// Get
pfServer.get('/',(req, res)=>{
    res.send(`get request received`)
})

// Send
// pfServer.post('/',(req, res)=>{
//     res.send(`Post request received`)
// })

//put
// pfServer.put('/',(req, res)=>{
//     res.send(`put request received`)
// })

//delete
// pfServer.delete('/',(req, res)=>{
//     res.send(`delete request received`)
// })

