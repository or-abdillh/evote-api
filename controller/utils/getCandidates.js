'use strict'

const conn = require('../../connection');
const response = require('../../response');
const tokenValidation = require('./tokenValidation.js');

//Handler for fetch all candidates
module.exports = (req, res, forMaster = false) => {
   //Get token
   const token = req.headers.token;
   if (token === undefined) response.forbidden(res, 'Token required');
   
   //Main handler
   //Create sql
   const sql = `SELECT * FROM Candidates`;
   const getCandidates = valid => {
      if (valid) {
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, rows);
         });
      } else response.forbidden(res, `Your token invalid ${forMaster ? " or you not admin" : ""}`);
   };
   
   //tokenValidation
   tokenValidation(conn, token, getCandidates, forMaster);
};