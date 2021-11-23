'use strict'

const mysql = require('mysql');

//Setup Connection
const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'EvoteDB'
});

//Connect
conn.connect(err => {
   if (err) throw err;
   console.log('MySQL Connected !!');
})

module.exports = conn