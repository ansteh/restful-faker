'use strict';
const jsf = require('json-schema-faker');
const modeler = require('json-schema-modeler');

module.exports = (app) => {
  app.post('/sample', (req, res) => {
    let schema = modeler.parse(req.body);
    // console.log(JSON.stringify(schema, null, 2));
    let data = jsf(schema);
    res.json(data);
  });

  app.post('/schema', (req, res) => {
    let data = jsf(req.body);
    res.json(data);
  });
};
