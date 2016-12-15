'use strict';

const express        = require('express');
const app            = express();
const path           = require('path');
const bodyParser     = require('body-parser');

app.use(bodyParser.json());

//app.use('/bower_components', express.static(path.resolve(__dirname, 'bower_components')));
//app.use('/client', express.static(path.join(__dirname, 'dist/client')));

require('./server/faker.js')(app);
require('./server/resources.js')(app);

const server = require('http').Server(app);

server.listen(3000, function(){
  console.log('listening on *:3000');
});
