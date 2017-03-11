var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.get('/', function(req, res){
    console.log('get the homepage');
    res.status(200);
    res.sendFile(path.join(__dirname, 'pub', 'index.html'));
});

app.get('/json', function(req, res){
    console.log('get the json');
    res
        .status(200)
        .json({"jsonData": true});
});

app.get('/file', function(req, res){
    console.log('get the file');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic on port ' + port); 
});