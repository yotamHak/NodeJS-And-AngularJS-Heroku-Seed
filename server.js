var express = require('express');
var path = require('path');
//var mongoose = require('mongoose');

var app = express();

var rootPath = path.normalize(__dirname) + '/../';
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + '/app'));
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/assets/images'));

app.get('/*', function (req, res) { res.sendFile(path.resolve('app/index.html')); });

//mongoose.connect('mongodb://username:password@something.mongolab.com:port/db');

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function(){
//    console.log('Connected to mongodb successfully!');
//});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});