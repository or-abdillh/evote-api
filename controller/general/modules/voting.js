'use strict'

const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

//Purpose to voting system
module.exports = ( req, res ) => {
   //Get token from headers
   const token = req.headers.token;
   if (token === undefined) response.forbidden(res, 'Token required');
   
   //Get candidate_id from body
   const candidateId = req.body.candidate_id;
   
   //SQL
   var sql;
   
   //Handler for check if user status_vote === true
   const isStatusVote = after => {
      //Create sql
      sql = `SELECT status_vote FROM Accounts WHERE token = "${token}"`;
      conn.query(sql, (err, rows) => {
         if (err) response.serverError(res, err);
         else {
            if ( rows[0].status_vote < 1 ) after() //status_vote false
            else response.forbidden(res, 'Anda sudah melakukan vote');
         }
      });
   }
   
   //Check even is available
   const isEventAvailable = () => {
      //create sql 
      sql = 'SELECT event_start_at, event_finish_at FROM Event';
      conn.query(sql, (err, rows) => {
         if (err) response.serverError(res, err);
         else {
            const eventStartAt = rows[0].event_start_at;
            const eventFinishAt = rows[0].event_finish_at;
            //Get current time
            const now = new Date().getTime();
            //Check isEventAvailable ?
            if ( now >= eventStartAt && now <= eventFinishAt ) submitVote(now); //Event is available
            else response.forbidden(res, 'Event tidak tersedia');
         }
      })
   }
   
   //Handler for submit vote and savve timestamp
   const submitVote = now => {
      //Create sql
      sql = `UPDATE Accounts SET candidate_id = "${candidateId}", status_vote = "1", time_stamp = "${now}" WHERE token = "${token}"`;
      conn.query(sql, (err, rows) => {
         if (err) response.serverError(res, err);
         else {
            if (rows.affectedRows > 0) response.success(res, 'Your vote success to submit');
            else response.notFound(res, 'Sorry, something wrong');
         }
      })
   }
   
   //Main Handler
   const voting = valid => {
      if (valid) {
         isStatusVote(isEventAvailable);
      } else response.forbidden(res, 'Your token invalid');
   }
   
   //tokenValidation
   tokenValidation(conn, token, voting);
}