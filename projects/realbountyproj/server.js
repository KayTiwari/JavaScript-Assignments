const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 6969;


app.use(express.json());
app.listen(port, () => {
    console.log(`Port is on ${port}`);
})

app.use('/bounty' , require('./routes/bountyRoutes'));

mongoose.connect('mongodb://localhost:27017/bounty', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

