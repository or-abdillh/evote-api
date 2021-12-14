'use strict'

require('dotenv').config();
const mysql = require('mysql');

//Setup Connection
const conn = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   port: process.env.DB_PORT,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   multipleStatements: true
});

//Connect
conn.connect(err => {
   if (err) throw err;
   console.log('MySQL Connected !!');
})

module.exports = conn
