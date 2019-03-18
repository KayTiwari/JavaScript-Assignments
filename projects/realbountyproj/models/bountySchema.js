const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    isJedi: {
        type: String,
        default: 'Jedi'
    },
    bountyAmount: String,
    image: String
})

module.exports = mongoose.model('Bounty', bountySchema)