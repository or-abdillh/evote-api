'use strict'

const response = require('../response');

//index Controller
const index = (req, res) => {
   response.success(res, 'This is response example from Index controller');
}

//Require controller for general route
const general = require('./general');

//Controller export
module.exports = {
   index,
   general
}