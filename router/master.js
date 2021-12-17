'use strict'

//Router Master
//Purpose for admin request

module.exports = (app, handler) => {
   
   //Test
   app.route('/master').get(handler.index);
   
   //Login admin
   app.route('/master/login').post(handler.login);
   
   //Get all Accounts
   app.route('/master/accounts').get(handler.getAccounts);
   
   //Insert new account
   app.route('/master/insert-account').post(handler.insertAccount);
   
   //Remove account by username
   app.route('/master/remove-account').delete(handler.removeAccount);
   
   //Update account
   app.route('/master/update-account').put(handler.updateAccount);
   
   //Get event
   app.route('/master/event').get(handler.getEvent);
   
   //Update event table
   app.route('/master/update-event').put(handler.updateEvent);
   
   //Get all candidates
   app.route('/master/candidates').get(handler.getCandidates);
   
   //insert new candidate
   app.route('/master/insert-candidate').post(handler.insertCandidate);
   
   //Update candidate
   app.route('/master/update-candidate').put(handler.updateCandidate);
   
   //Remove candidate
   app.route('/master/remove-candidate').delete(handler.removeCandidate);
};