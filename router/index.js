'use strict'

//import controller
const controller = require('../controller');

//Import handler for general purpose
const generalRouter = require('./general.js');
const generalController = require('../controller/general');

//Import handler for master purpose
const masterRouter = require('./master.js');
const masterController = require('../controller/master');

//Router
const router = app => {
   
   //Index route
   app.route('/').get(controller.index);

   //Token authenication from client
   app.route('/auth').get(controller.auth);

   //Logout handler
   app.route('/logout').get(controller.logout);
   
   //Use generalRouter and generalController
   generalRouter(app, generalController);
   
   //Use masterRouter and masterController
   masterRouter(app, masterController);
};

//exports
module.exports = router;