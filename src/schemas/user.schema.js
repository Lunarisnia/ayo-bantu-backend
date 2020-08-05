const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    role: Number,
});

module.exports = userSchema;