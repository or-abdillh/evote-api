'use strict'

//Update or modify data account from table Accounts
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Get form update account from body
   const username = req.body.username,
         password = req.body.password,
         fullname = req.body.fullname,
         gender = req.body.gender,
         jobId = req.body.job_id,
         lastModified = new Date().getTime();
   
   //main handler
   const updateAccount = valid => {
      if (valid) {
         //Create sql
         const sql = `
            UPDATE Accounts SET fullname = "${fullname}", 
            username = "${username}", password = "${password}",
            gender = "${gender}", job_id = "${jobId}", last_modified = "${lastModified}" 
            WHERE username = "${username}"
         `;
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else {
               if (rows.affectedRows > 0) response.success(res, "Update account success");
               else response.notFound(res, "there is no suitable data to update");
            }
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, updateAccount, true);
};