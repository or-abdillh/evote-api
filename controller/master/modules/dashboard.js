'use strict'

//Create dashboard response
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

/*
Example response 
{
   candidates: 4,
   participants: 6,
   incomingVote: 2,
   participations: 32.56%,
}
*/

module.exports = (req, res) => {
   //Get token from headers
   const token = req.headers.token;
   
   //Query to Accounts and Candidates table
   const sql = `
      SELECT status_vote FROM Accounts WHERE role = "general";
      SELECT candidate_id FROM Candidates
   `;
   
   //Main handler
   const createDashboard = valid => {
      if (valid) {
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err); //MySQL error
            else {
               const dashboard = {}; //Container
               //Candidates property
               dashboard.candidates = rows[1].length;
               //participants property
               dashboard.participants = rows[0].length;
               //incomingVote property
               dashboard.incomingVote = rows[0].filter(d => d.status_vote > 0).length;
               //participations property
               dashboard.participations = ( dashboard.incomingVote / dashboard.participants * 100 ).toFixed(2) + '%';
               //Sending response
               response.success(res, dashboard);
            }
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, createDashboard, true);
};