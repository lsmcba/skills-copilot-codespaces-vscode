//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/comments');
var Comment = require('./model/comment');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/comment', function(req, res) {
    var comment = new Comment(req.body);
    comment.save(function(err, savedComment) {
        if (err) {
            res.status(500).send({error: "Your comment was not saved."});
        } else {
            res.send(savedComment);
        }
    });
});

app.get('/comment', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) {
            res.status(500).send({error: "Could not fetch comments."});
        } else {
            res.send(comments);
        }
    });
});

app.listen(3001, function() {
    console.log("Server is running on port 3001...");
});