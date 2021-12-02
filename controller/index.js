'use strict'
//Import modules
const response = require('../response');
const tokenValidation = require('./utils/tokenValidation.js');
const conn = require('../connection');

//index Controller
const index = (req, res) => {
   response.success(res, 'This is response example from Index controller');
}

//Authentication token from client
const auth = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Create callback for tokenValidation
   const afterAuth = status => {
      //Auth success
      if (status) response.success(res, 'Your token valid, auth success');
      else response.forbidden(res, 'Your token invalid, auth failed');
   }
   
   //Authentication
   tokenValidation(conn, token, afterAuth);
}

//Require controller for general route
const general = require('./general');

//Controller export
module.exports = {
   index,
   auth,
   general
}