'use strict'

//Insert new account into table Accounts
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Get form new Account from body
   const username = req.body.username,
         password = req.body.password,
         fullname = req.body.fullname,
         gender = req.body.gender,
         jobId = req.body.job_id,
         lastModified = new Date().getTime();
   //Main handler
   const insertAccount = valid => {
      if (valid) { //token valid
         //Create sql
         const sql = `
            INSERT INTO Accounts (fullname, username, password, gender, job_id, last_modified) 
            VALUES ("${fullname}", "${username}", "${password}", "${gender}", "${jobId}", ${lastModified})
         `;
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, "New account create");
         });
      } else response.forbidden(res, "Token invalid or you not admin");
   };
   
   //Token Validation
   tokenValidation(conn, token, insertAccount, true);
   
};