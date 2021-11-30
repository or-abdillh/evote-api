'use strict'

const response = require('../../../response');
const conn = require('../../../connection');
const tokenValidation = require('../../utils/tokenValidation.js');

//Purpose to get event information
module.exports = ( req, res ) => {
   //Get token fro headers
   const token = req.headers.token;
   if (token === undefined) response.forbidden(res, 'Token required');
   
   //Create sql
   const sql = 'SELECT * FROM Event ; SELECT username FROM Accounts WHERE status_vote = "1"';
   
   //Main handler
   const getEvent = valid => {
      if (valid) {
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else {
            	const results = rows[0];
            	results[0].count = rows[1].length;
            	response.success(res, results);
            }
         });
      } else response.forbidden(res, 'Your token invalid');
   }
   
   //tokenValidation
   tokenValidation(conn, token, getEvent);
}
