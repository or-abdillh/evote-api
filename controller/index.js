'use strict'

//Import modules
const randomToken = require('random-token');
const response = require('../response');
const tokenValidation = require('./utils/tokenValidation.js');
const conn = require('../connection');

//index Controller
const index = (req, res) => {
   response.success(res, 'This is response example from Index controller');
};

//logout account
const logout = (req, res) => {
 //Get token from Header and generate new token
  const token = req.headers.token;
  const newToken = randomToken(250);
  if (token === undefined) response.forbidden(res, 'Token required');
  
  //Create SQL and Connect
  const sql = `UPDATE Accounts SET token = "${newToken}" WHERE token = "${token}"`;
  conn.query(sql, (err, rows) => {
     if (err) response.serverError(res, err);
     else {
        if (rows.affectedRows > 0) response.success(res, 'Logout from your account success');
        else response.notFound(res, 'Token not match from any data');
     }
  });
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
   };
   
   //Authentication
   tokenValidation(conn, token, afterAuth);
};

//Controller export
module.exports = {
   index,
   auth,
   logout
};
