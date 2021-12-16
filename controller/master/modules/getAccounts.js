'use strict'

//Get all fields in Accounts table
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Create main handler
   const getAccounts = valid => {
      if (valid) { //Token valid
         //Create sql
         const sql = `
            SELECT Accounts.fullname, Accounts.username, Accounts.password, 
            Jobs.job_name, Accounts.gender, Accounts.status_vote, Accounts.time_stamp, 
            Accounts.last_modified FROM Accounts INNER JOIN Jobs ON 
            ( Accounts.job_id = Jobs.job_id AND Accounts.role = "general" ) 
            ORDER BY Accounts.fullname ASC
         `;
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, rows);
         });
      } else response.forbidden(res, "Ilegal action, your token invalid");
   };
   
   //Token validation
   tokenValidation(conn, token, getAccounts);
};