const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema ({
    score:{
        type: Number,
        required: true,
        unique: true
    }, 
    username: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Score', ScoreSchema);