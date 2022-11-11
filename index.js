const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const dotenv=require("dotenv")
const userRoute=require("./src/routes/users")
const auth=require("./src/routes/auth")
const trackRoutes = require('./src/routes/tracks');
const mongoose=require("mongoose")

const app = express();

mongoose.connect('mongodb+srv://ayush:12345@cluster0.x0duiki.mongodb.net/?retryWrites=true&w=majority').then(
  console.log("connected to DB")).catch((err)=>console.log(err));

const PORT =process.env.PORT || 5000
// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use("/auth",auth)
app.use("/users",userRoute)
app.use('/tracks', trackRoutes);

app.listen(PORT,()=>{
    console.log("running good gg ON")
})  