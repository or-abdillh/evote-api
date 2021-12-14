'use strict'

//Response handler
const createJSON = (res, code, status, response) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.status(code);
   return {
      code,
      status,
      response,
      request_create_at: new Date().toLocaleString('id')
   }
   res.end();
}

//success
const success = (res, msg) => {
   res.json( createJSON(res, 200, 'Success', msg) );
}

//forbidden
const forbidden = (res, msg) => {
   res.send( createJSON(res, 403, 'Ilegal Action or Access Denied', msg) );
}

//Interal server error
const serverError = (res, msg) => {
   res.send( createJSON(res, 501, 'Internal server error', msg) );
}

//Content not found
const notFound = (res, msg) => {
   res.send( createJSON(res, 404, 'Content not found', msg) );
}

//Empty response
const empty = (res, msg) => {
   res.send( createJSON(res, 204, 'Empty response', msg) );
}

//Export all handler to one module
module.exports = {
   success,
   forbidden,
   serverError,
   notFound,
   empty
}