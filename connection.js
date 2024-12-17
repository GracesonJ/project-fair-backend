//import mongoose

const mongoose = require('mongoose')

connectionstring = process.env.DATABASE
mongoose.connect(connectionstring).then((res)=>{
    console.log(`mongodb connected successfully`);
    
}).catch((err)=>{
    console.log(`Mongodb connection failes due to ${err}`);
    
})