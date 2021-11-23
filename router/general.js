'use strict'

// ROUTER - GENERAL
//Purpose to handle route from user 
//Just for user route

const general = (app, handler) => {
   //Testing
   app.route('/general/').get(handler.index);
}

module.exports = general