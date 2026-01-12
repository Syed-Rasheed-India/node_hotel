let mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_URL;

mongoose.connect(URL,{
      useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected")
})

db.on('error',()=>{
    console.log("error")
})

db.on('disconnected',()=>{
    console.log("disconnected")
})


module.exports = db;