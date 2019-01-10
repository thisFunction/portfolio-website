const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dojo = require('./routes/api/dojo');
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db,  {useNewUrlParser: true })
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//Use routes
app.use('/api/dojo', dojo)

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`))