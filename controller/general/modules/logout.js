'use strict'

const randomToken = require('random-token');
const response = require('../../../response');
const conn = require('../../../connection');

//Purpose logout system
module.exports = ( req, res ) => {
  //Get token from Header and generate new token
  const TOKEN = req.headers.token;
  const newToken = randomToken(100);
  
  //Create SQL and Connect
  const sql = `UPDATE Accounts SET token = "${newToken}" WHERE token = "${TOKEN}"`;
  conn.query(sql, (err, rows) => {
     if (err) response.serverError(res, err);
     else {
        if (rows.affectedRows > 0) response.success(res, 'Logout from your account success');
        else response.notFound(res, 'Token not match from any data');
     }
  });
}