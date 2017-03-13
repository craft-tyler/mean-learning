var express = require('express');
var router = express.Router();

router.route('/json')
    .get(function(req, res){
        console.log('Get the json');
        res
            .status(200)
            .json({"jsonData": true});
    })
    .post(function(req, res){
        console.log('Post the json');
        res
            .status(200)
            .json({"jsonData": "Post Recieved"});
    });

module.exports = router;