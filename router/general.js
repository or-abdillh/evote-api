'use strict'

// ROUTER - GENERAL
//Purpose to handle route from user 
//Just for user route

const general = (app, handler) => {
   //Testing
   app.route('/general/').get(handler.index);
   
   //Login
   app.route('/general/login').post(handler.login);
   
   //Logout
   app.route('/general/logout').get(handler.logout);
   
   //Get profile
   app.route('/general/profile').get(handler.profile);
   
   //Get event
   app.route('/general/event').get(handler.getEvent);
   
   //Get all candidates
   app.route('/general/candidates').get(handler.getCandidates)
   
   //Submit voting
   app.route('/general/voting').post(handler.voting);
}

module.exports = general;