'use strict'

//Get event from table event
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //main handler
   const getEvent = valid => {
      if (valid) {
         //Create sql
         const sql = "SELECT * FROM Event";
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, rows);
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, getEvent, true);
};