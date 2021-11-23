'use strict'

const response = require('../../../response');
const conn = require('../../../connection');
const tokenValidation = require('../../utils/tokenValidation.js');

//Purpose to get event information
module.exports = ( req, res ) => {
   //Get token fro headers
   const token = req.headers.token;
   
   //Create sql
   const sql = 'SELECT * FROM Event';
   
   //Main handler
   const getEvent = valid => {
      if (valid) {
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else {
               if (rows.length > 0) response.success(res, rows[0]);
               else response.empty(res, rows);
            }
         });
      } else response.forbidden(res, 'Your token invalid');
   }
   
   //tokenValidation
   tokenValidation(conn, token, getEvent);
}