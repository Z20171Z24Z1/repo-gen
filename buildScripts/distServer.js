/* ES 5
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
*/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
// Dont need references to webpack
// This is just for production testing not for production deployment

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

/* eslint-disable no-console */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/* Server from heroku now
app.get('/users', function(req, res){
    res.json([
        {"id":1,"firstName":"Bob", lastName:"Smith", email:"bob.smith@gmail.com"},
        {"id":2,"firstName":"Thelma", lastName:"Houston", email:"thelma.houston@gmail.com"},
        {"id":3,"firstName":"Tom", lastName:"Jones", email:"tom.jones@gmail.com"}
    ]);
});
*/

app.listen(port, function(err){
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
