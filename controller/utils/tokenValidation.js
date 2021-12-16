'use strict'

//Purpose to check token
module.exports = (connection, token, callback, forMaster = false) => {
   //Create sql and Connect
   let sql = `SELECT username FROM Accounts WHERE token = "${token}"`;
   //For master auth
   if ( forMaster ) sql += ' AND role = "master"';
   
   connection.query(sql, (err, rows) => {
      if (err) callback(false);
      else {
         if (rows.length > 0) callback(true);
         else callback(false);
      }
   });
}