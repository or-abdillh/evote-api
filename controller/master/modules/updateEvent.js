'use strict'

//Update event table
const conn = require('../../../connection');
const response = require('../../../response');
const tokenValidation = require('../../utils/tokenValidation.js');

module.exports = (req, res) => {
   
   //Get token from headers
   const token = req.headers.token;
   
   //Get form for update event from body
   const eventStartAt = req.body.event_start_at,
         eventFinishAt = req.body.event_finish_at,
         passcode = req.body.passcode,
         eventTitle = req.body.event_title;
         
   //Main handler
   const updateEvent = valid => {
      if (valid) {
         //Create sql
         const sql = `
            UPDATE Event SET event_start_at = "${eventStartAt}", 
            event_finish_at = "${eventFinishAt}", passcode = "${passcode}",
            event_title = "${eventTitle}"
         `;
         //Query
         conn.query(sql, (err, rows) => {
            if (err) response.serverError(res, err);
            else response.success(res, "Event updated");
         });
      } else response.forbidden(res, "Your token invalid or you not admin");
   };
   
   //Token validation
   tokenValidation(conn, token, updateEvent, true);
};