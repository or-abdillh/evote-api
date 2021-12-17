'use strict'

//Controller for master route path
const response = require('../../response');


//test response
const index = (req, res) => {
   response.success(res, "This is example response from master router");
};

//import child modules
const login = require('./modules/login.js');
const getAccounts = require('./modules/getAccounts.js');
const insertAccount = require('./modules/insertAccount.js');
const removeAccount = require('./modules/removeAccount.js');
const updateAccount = require('./modules/updateAccount.js');
const getEvent = require('./modules/getEvent.js');
const updateEvent = require('./modules/updateEvent.js');
const getCandidates = require('./modules/getCandidates.js');

//exports
module.exports = {
   index,
   login,
   getAccounts,
   insertAccount,
   removeAccount,
   updateAccount,
   getEvent,
   updateEvent,
   getCandidates
};