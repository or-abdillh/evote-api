'use strict'

//import controller
const controller = require('../controller');

//Router
const router = app => {
   //Index route
   app.route('/').get(controller.index)
}

//exports
module.exports = router