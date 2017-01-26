var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./routes')
    .into(app);

module.exports = app;

