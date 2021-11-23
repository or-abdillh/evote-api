'use strict'

//Response handler
const createJSON = (res, code, status, response) => {
   res.status(200);
   return {
      code,
      status,
      request_create_at: new Date().toLocaleString('id'),
      response
   }
   res.end();
}

//success
const success = (res, msg) => {
   res.json( createJSON(res, 200, 'Success', msg) );
}

//forbidden
const forbidden = (res, msg) => {
   res.json( createJSON(res, 403, 'Access denied', msg) );
}

//Interal server error
const serverError = (res, msg) => {
   res.json( createJSON(res, 501, 'Internal server error', msg) );
}

//Content not found
const notFound = (res, msg) => {
   res.json( createJSON(res, 404, 'Content not fouond', msg) );
}

//Empty response
const empty = (res, msg) => {
   res.json( createJSON(res, 204, 'Empty response', msg) );
}

//Export all handler to one module
module.exports = {
   success,
   forbidden,
   serverError,
   notFound,
   empty
}