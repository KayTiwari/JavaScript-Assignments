const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema ({
    team: String,
    bluescore: Number,
    redscore: Number,
    winnername: String
})
module.exports = mongoose.model('Score', ScoreSchema);