'use strict'

const getCandidates = require('../../utils/getCandidates.js');

//Purpose for get all candidates
module.exports = ( req, res ) => getCandidates(req, res, true);