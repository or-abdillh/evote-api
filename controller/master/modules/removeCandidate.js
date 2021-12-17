'use strict'

//Remove candidate from table Candidates by candidate_id
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //get primary key from body
   const key = req.body.candidate_id;
   
   //main handler
   const removeCandidate = valid => {
      if (valid) {
         //Create sql
         const sql = `DELETE FROM Candidates WHERE candidate_id = "${key}"`;
         //query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else {
               if (rows.affectedRows > 0) response.success(res, "candidate success to remove from table");
               else response.notFound(res, "there is no suitable data to delete");
            }
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, removeCandidate, true);
};