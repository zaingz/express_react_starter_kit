

var express    = require('express');        // call express
var app        = express();                 // define our app using express

var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use('/build',express.static(__dirname + '/build'));




var port = process.env.PORT || 3000;        // set our port


var router = express.Router();              // get an instance of the express Router


router.get('/', function(req, res) {
    res.json({"message":"React is awesome"});   
});


app.use('/api', router);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


app.listen(port);
console.log('Magic happens on port ' + port);