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
const profile = require('./modules/getProfile.js');
const getEvent = require('./modules/getEvent.js');
const getCandidates = require('./modules/getCandidates.js');
const voting = require('./modules/voting.js');

module.exports = {
   index,
   login,
   profile,
   getEvent,
   getCandidates,
   voting
}
