const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacationSchema = new Schema({
    place: String,
    price: Number,
    timeToGo: String
})

module.exports = mongoose.model('Vacation', vacationSchema)