'use strict'

//Login handler for admin or "master" role
const randomToken = require('random-token');
const conn = require('../../../connection');
const response = require('../../../response');

module.exports = (req, res) => {
   //Get data from body
   const body = {
      username: req.body.username,
      password: req.body.password
   };
   
   //Create sql
   let sql = `SELECT username FROM Accounts WHERE username = "${body.username}"
      AND password = "${body.password}" AND role = "master"`;
      
   //Query
   conn.query(sql, (err, rows) => {
      if (err) response.serverError(res, err);
      else {
         //Error not found
         if ( rows.length > 0 ) {
            //Create token
            const token = randomToken(250);
            //Insert token into table
            sql = `UPDATE Accounts SET token = "${token}" WHERE username = "${body.username}"`;
            conn.query(sql, (err, rows) => {
               if (err) response.serverError(res, err);
               else response.success(res, { token }); //Send success response
            })
         }
         else response.forbidden(res, "username or password invalid or you not an admin");
      }
   });
};