const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const users = mongoose.model('Users', userSchema);

module.exports = users;