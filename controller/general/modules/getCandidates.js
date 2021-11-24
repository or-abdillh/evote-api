'use strict'

const response = require('../../../response');
const conn = require('../../../connection');
const tokenValidation = require('../../utils/tokenValidation.js');

//Purpose for get all candidates
module.exports = ( req, res ) => {
   //Get token
   const token = req.headers.token;
   if (token === undefined) response.forbidden(res, 'Token required');
   
   //Create sql
   const sql = `SELECT * FROM Candidates`;
   
   //Main handler
   const getCandidates = valid => {
      if (valid) {
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, rows);
         })
      } else response.forbidden(res, 'Your token invalid');
   }
   
   //Token validation
   tokenValidation(conn, token, getCandidates);
   
}