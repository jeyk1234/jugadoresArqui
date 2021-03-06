const path = require('path');
const express = require('express');
const morgan = require('morgan');
//const bodyParser=require("body-parser");
const mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://heroku_3qjkm7pd:8kfpvft86smvkmuh9qeggapj4v@ds051378.mlab.com:51378/heroku_3qjkm7pd')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
//const indexRoutes = require('./routes/jugador');
//var jugador=require('./routes/jugador.js');


// settings
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
//app.use('/', indexRoutes);
app.use('/jugador', require('./routes/jugador'));

app.listen(app.get('port'), () => {
  console.log('server puerto 3000');
});