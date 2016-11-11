// JavaScript source code
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./rotes/index');
var task = require('./rotes/task');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static Folder
app.use(express.static(path.join(__dirname, 'client')));
