'use strict'

const randomToken = require('random-token');
const response = require('../../../response');
const conn = require('../../../connection');

module.exports = ( req, res ) => {
   //Get data from body
   const username = req.body.username;
   const password = req.body.password;
   
   //Create SQL and Connect SQL
   let sql = `SELECT * FROM Accounts WHERE username = "${username}" AND password = "${password}"`;
   conn.query(sql, (err, rows) => {
      if (err) response.serverError(res, err);
      else {
         //Succes login
         if (rows.length > 0) {
            //generate TOKEN
            const TOKEN = randomToken(100);
            //Save TOKEN to DB by username
            sql = `UPDATE Accounts SET token = "${TOKEN}" WHERE username = "${username}"`;
            conn.query(sql, (err, rows) => {
               if (err) response.serverError(res, err);
               else response.success(res, { TOKEN });
            });
         } else {
            //Failed login
            response.forbidden(res, 'Username or password is wrong, try again with correct data');
         }
      }
   });
}