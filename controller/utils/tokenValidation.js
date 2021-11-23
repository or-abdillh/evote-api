'use strict'

//Purpose to check token
module.exports = (connection, token, callback) => {
   //Create sql and Connect
   const sql = `SELECT username FROM Accounts WHERE token = "${token}"`;
   connection.query(sql, (err, rows) => {
      if (err) callback(false);
      else {
         if (rows.length > 0) callback(true);
         else callback(false);
      }
   });
}