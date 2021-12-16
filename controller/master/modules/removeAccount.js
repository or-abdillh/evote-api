'use strict'

//Remove account from table Accounts by username
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //get primary key from body
   const key = req.body.username;
   
   //main handler
   const removeAccount = valid => {
      if (valid) {
         //Create sql
         const sql = `DELETE FROM Accounts WHERE username = "${key}"`;
         //query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else {
               if (rows.affectedRows > 0) response.success(res, "account success to remove from table");
               else response.notFound(res, "there is no suitable data to delete");
            }
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, removeAccount, true);
};