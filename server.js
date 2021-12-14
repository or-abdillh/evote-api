'use strict'

//Import modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./connection');
const router = require('./router');

//Setup Service
const PORT = process.env.PORT || 8080;
const app = express();

//Use modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const allowedOrigins = ["https://evote-himati.vercel-app"];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

//Router
router(app);

//Test server
app.listen(PORT, err => {
   if (err) throw err;
   console.log(`Server has running at PORT ${PORT}`);
})
