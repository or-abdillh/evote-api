'use strict'

//index Controller
const index = (req, res) => {
   res.status(200);
   res.json({
      status: 'success',
      code: 200,
      request_create_at: new Date().toLocaleString('id'),
      response: 'This is response example from index controller'
   });
   res.end();
}

//Require controller for general route
const general = require('./general');

//Controller export
module.exports = {
   index,
   general
}