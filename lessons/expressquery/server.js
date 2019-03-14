const express = require('express');
const app = express();
const port = 6969;

app.use(express.json());

app.listen(port, () => {
    console.log(`${port} is running`);
})
//GET
app.get('/data', (req, res) => {
    res.send({database});
})
//GET1
app.get('/spot/:id', (req, res) => {
    let {id} = req.params;
    const found = data.find(data => data.id === id);
    res.send(found);
})
//POST
app.post('/data', (req, res) => {
    //All objects are considered different, so we need seperation keys
    if (Object.keys(req.body).length !== 0) {
    database.push(req.body);
    res.send({database});
    } else {
        res.send('Invalid entry');
    }
})
//DELETE
app.delete('/data/:id', (req, res) => {
    const {id} = req.params;
    const index = database.indexOf(data => data.id === id);
    database.splice(index, 1);
})
//PUT
app.put('/data/:id', (req, res) => {
    const {id} = req.params;
    const update = req.body;
    database.forEach(data => {
        if (data.id === id) {
            data = Object.assign(data, update);
        }
    })
    res.send({database});
})



//Req.query

app.get('/spot', (req, res) => {
    let {time} = req.query;
    if (time && price) {
        const costandseason = data.filter(spot => spot.timeToGo === time && spot.price < price);
        res.send(costandseason);
    }
    if (time) {
        const season = data.filter(spot => spot.timeToGo === time)
        res.send(season);
    } else if(price) {
        const cost = data.filter(spot => spot.price === +price);
        res.send(cost);
    } else {
        res.send(data);
    }
})

