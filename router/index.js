'use strict'

//import controller
const controller = require('../controller');

//Import handler for general purpose
const generalRouter = require('./general.js');
const generalController = require('../controller/general');

//Router
const router = app => {
   
   //Index route
   app.route('/').get(controller.index)
   
   //Use generalRouter and generalController
   generalRouter(app, generalController);
}

//exports
module.exports = router;