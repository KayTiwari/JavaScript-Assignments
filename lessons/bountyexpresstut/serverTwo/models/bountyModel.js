const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    isJedi: String,
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: Number,
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Bounty', bountySchema)