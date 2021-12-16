'use strict'

//Controller for master route path
const response = require('../../response');


//test response
const index = (req, res) => {
   response.success(res, "This is example response from master router");
};

//import child modules
const login = require('./modules/login.js');

//exports
module.exports = {
   index,
   login
};