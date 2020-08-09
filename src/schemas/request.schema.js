const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requestType: String,
    title: String,
    description: String,
    creatorUser: Object,
    address: Object,
    coordinate: Object,
    donatorCount: Number,
    photo: String,
    postedAt: Date,
});

module.exports = requestSchema;