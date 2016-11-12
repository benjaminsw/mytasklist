var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bensw:Rayong21120@ds151707.mlab.com:51707/mytasklist_db', ['tasks'])

router.get('/tasks', function (req, res, next) {
    //res.render('index.html');
    
});

module.exports = router;
