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
app.use(cors());
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//Router
router(app);

//Test server
app.listen(PORT, err => {
   if (err) throw err;
   console.log(`Server has running at PORT ${PORT}`);
})
