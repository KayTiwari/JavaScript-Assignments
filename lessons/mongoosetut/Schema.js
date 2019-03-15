const mongoose = require('mongoose');


//How to use schemas in get requests
const Schema = mongoose.Schema
const friendSchema = new Schema ({
    name: String,
    age: Number,
})

const Friend = mongoose.model('Friend', friendSchema);