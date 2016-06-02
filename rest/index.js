'use strict';

const express        = require('express');
const app            = express();
const path           = require('path');

//app.use('/bower_components', express.static(path.resolve(__dirname, 'bower_components')));
//app.use('/client', express.static(path.join(__dirname, 'dist/client')));

app.get('/', function(req, res){
  res.send('restful-faker');
});

const server = require('http').Server(app);

server.listen(3000, function(){
  console.log('listening on *:3000');
});
