const Profile = require("./../models/Schema")
const youtubeRoute;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
    .then(() => {
        console.log('Database is connected');
    })

youtubeRoute.get('/', (req, res) => {
    Profile.find((err, profiles) => {
        return res.send(profiles)
    })
})