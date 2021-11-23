'use strict'

// CONTROLLER - GENERAL
//  Purpose for handle route from Evote User 
//  Just for user request

const index = (req, res) => {
   res.status(200);
   res.json({
      status: 'success',
      code: 200,
      request_create_at: new Date().toLocaleString('id'),
      response: 'This is response example from General controller'
   });
   res.end();
}

module.exports = {
   index
}