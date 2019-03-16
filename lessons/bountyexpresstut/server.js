const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3432

app.use(express.json());

app.use('/api/bounties', require('./routes/bountyRoutes'));
// app.use('api/clownshoes', require('./routes/circusRoutes'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on on port ${port}`);
})
