'use strict';

var express = require('express');
var app = express();

// Routing
app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});