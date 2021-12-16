'use strict'

//Router Master
//Purpose for admin request

module.exports = (app, handler) => {
   
   //Test
   app.route('/master').get(handler.index);
   
   //Login admin
   app.route('/master/login').post(handler.login)
   
   //Get all Accounts
   app.route('/master/accounts').post(handler.getAccounts);
}