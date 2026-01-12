let express = require('express');
let app = express();
let db = require('./db');
let Menu = require('./models/menuItem')
require('dotenv').config();
app.use(express.json())

let PORT = process.env.PORT || 3000;
console.log("SERVER.JS IS RUNNING");


let personRouter = require('./routes/personRoute');
app.use('/person',personRouter)


let menuRouter = require('./routes/menuRoute')
app.use('/menu',menuRouter)


app.listen(PORT,()=>console.log("listening on port 3000"))

