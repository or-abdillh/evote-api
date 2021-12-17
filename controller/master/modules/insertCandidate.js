'use strict'

//Insert new candidate into Candidates table
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Get form new candidate from body
   const candidateNumber = req.body.candidate_number,
         chairmanName = req.body.chairman_name,
         chairmanImg = req.body.chairman_image,
         viceChairmanName = req.body.vice_chairman_name,
         viceChairmanImg = req.body.vice_chairman_image;
   
   //Main handler
   const insertCandidate = valid => {
      if (valid) {
         //Create sql
         const sql = `
            INSERT INTO Candidates (candidate_number, chairman_name, chairman_image, vice_chairman_name, vice_chairman_image) 
            VALUES ("${candidateNumber}", "${chairmanName}", "${chairmanImg}", "${viceChairmanName}", "${viceChairmanImg}")
         `;
         //query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, "Success add new candidate");
         });
      } else response.forbidden(res, 'Your token invalid or you not admin');
   };
   
   //Token validation
   tokenValidation(conn, token, insertCandidate, true);
   
};