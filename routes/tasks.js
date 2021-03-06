var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bensw:Rayong21120@ds151707.mlab.com:51707/mytasklist_db', ['tasks'])

//get all tasks
router.get('/tasks', function (req, res, next) {
    //res.render('index.html');
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

//get a single tasks
router.get('/tasks/:id', function (req, res, next) {
    //res.render('index.html');
    db.tasks.findOne({_id:mongojs.ObjectId(req.param.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//save task
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.task.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

//delete task
router.delete('/tasks/:id', function (req, res, next) {
    //res.render('index.html');
    db.tasks.remove({ _id: mongojs.ObjectId(req.param.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//update task
router.put('/tasks/:id', function (req, res, next) {
    var task = req.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Date"
        });
    } else {
        db.tasks.update({ _id: mongojs.ObjectId(req.param.id)}, updTask, {}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
    
});

module.exports = router;
