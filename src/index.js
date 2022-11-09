const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const dotenv=require("dotenv")


const trackRoutes = require('./routes/tracks');

const app = express();

const PORT =process.env.PORT || 5000
// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/tracks', trackRoutes);

app.listen(3000);
console.log('Server on port', PORT);