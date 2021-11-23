'use strict'

// CONTROLLER - GENERAL
//  Purpose for handle route from Evote User 
//  Just for user request

const response = require('../../response');

const index = (req, res) => {
   response.success(res, 'This is response example from General controller');
}

//Import local modules
const login = require('./modules/login.js');

module.exports = {
   index,
   login
}