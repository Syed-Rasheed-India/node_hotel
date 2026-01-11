let mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/hotels';

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