//create web server
import express from 'express';
var app = express();
import { json, urlencoded } from 'body-parser';
import { connect } from 'mongoose';
var db = connect('mongodb://localhost/comments');
import Comment, { find } from './model/comment';
import cors from 'cors';

app.use(cors());
app.use(json());
app.use(urlencoded({extended: false}));

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
    find({}, function(err, comments) {
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