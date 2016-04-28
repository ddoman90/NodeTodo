var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/index.es6');
var port = process.env.PORT || 3000;
var setupController = require('./controllers/setupController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
console.log('register');
setupController(app);

app.listen(port);