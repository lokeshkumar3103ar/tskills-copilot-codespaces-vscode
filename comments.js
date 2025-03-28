//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');           // File system module
const comments = require('./comments.js');  // Import comments.js           
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));  // Serve static files
app.get('/getComments', function(req, res) {
    res.send(comments.getComments());
});
app.post('/addComment', function(req, res) {
    var comment = req.body.comment;
    comments.addComment(comment);
    res.send('Comment added');
});
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});     