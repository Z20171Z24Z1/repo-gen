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
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
    res.json([
        {"id":1,"firstName":"Bob", lastName:"Smith", email:"bob.smith@gmail.com"},
        {"id":2,"firstName":"Thelma", lastName:"Houston", email:"thelma.houston@gmail.com"},
        {"id":3,"firstName":"Tom", lastName:"Jones", email:"tom.jones@gmail.com"}
    ]);
});

app.listen(port, function(err){
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
