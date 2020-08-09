const mongoose = require('mongoose');
const RequestSchema = require('../schemas/request.schema');

const RequestModel = mongoose.model('Request', RequestSchema);

module.exports = RequestModel;