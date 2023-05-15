const express = require('express');
const connectDB = require('./server/database/connection')
const userRoute = require('./server/router/route')
const bodyParser = require('body-parser')
// const cors = require("cors");

const app = express()
PORT = 6000;



connectDB()

//middlewares
//bodyParser handle http request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false
}));
// app.use(cors());
app.use('/', userRoute)




app.listen(PORT,(req,res)=>{
    console.log(`server is running on http://localhost:${PORT}`)
})