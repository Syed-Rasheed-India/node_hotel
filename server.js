let express = require('express');
let app = express();
let db = require('./db');
let Menu = require('./models/menuItem')

app.use(express.json())

console.log("SERVER.JS IS RUNNING");


let personRouter = require('./routes/personRoute');
app.use('/person',personRouter)


let menuRouter = require('./routes/menuRoute')
app.use('/menu',menuRouter)








app.listen(3000,()=>console.log("listening on port 3000"))

