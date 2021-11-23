'use strict'

//index Controller
const index = (req, res) => {
   res.status(200);
   res.json('REST API success to running !!');
   res.end();
}

//Controller export
module.exports = {
   index
}