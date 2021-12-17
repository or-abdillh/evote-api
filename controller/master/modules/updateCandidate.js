'use strict'

//Update candidate from Candidates table
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Get form update candidate from body
   const candidateId = req.body.candidate_id,
         candidateNumber = req.body.candidate_number,
         chairmanName = req.body.chairman_name,
         chairmanImg = req.body.chairman_image,
         viceChairmanName = req.body.vice_chairman_name,
         viceChairmanImg = req.body.vice_chairman_image;
   
   //Main handler
   const insertCandidate = valid => {
      if (valid) {
         //Create sql
         const sql = `
            UPDATE Candidates SET chairman_name = "${chairmanName}", chairman_image = "${chairmanImg}",
            vice_chairman_name = "${viceChairmanName}", vice_chairman_image = "${viceChairmanImg}",
            candidate_number = "${candidateNumber}" WHERE candidate_id = "${candidateId}"
         `;
         //query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, "Success update candidate");
         });
      } else response.forbidden(res, 'Your token invalid or you not admin');
   };
   
   //Token validation
   tokenValidation(conn, token, insertCandidate, true);
   
};