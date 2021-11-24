'use strict'

const response = require('../../../response');
const conn = require('../../../connection');
const tokenValidation = require('../../utils/tokenValidation.js');

//Purpose to get profile information
module.exports = ( req, res ) => {
   //Get token from headers
   const token = req.headers.token;
   if (token === undefined) response.forbidden(res, 'Token required');
   
   //Create SQL and Connecin callback
   const sql = `SELECT Accounts.fullname, Accounts.status_vote, Accounts.gender, Jobs.job_name 
      FROM Accounts INNER JOIN Jobs ON Accounts.job_id = Jobs.job_id AND Accounts.token = "${token}"`;
   
   //Main handler   
   const getProfile = valid => {
      if (valid) {
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, rows[0]);
         })
      } else response.forbidden(res, 'Your token invaliid');
   }
   
   //Token validation
   tokenValidation(conn, token, getProfile);
}