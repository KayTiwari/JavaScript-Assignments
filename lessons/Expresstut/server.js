const express = require("express");
const app = express();
const port = 6969;
const uuid = require('uuid');

//bodyParser converts JSON to javascript objects, between client and server
// const bodyParser = require('body-parser')

//Get Requests

app.use(express.json()) 
const database = [
    {
        name: 'spaghetti',
        type: 'pasta',
        sauce: 'red',
        id: 666

    },
    {
        name: 'fettuccine',
        type: 'pasta',
        sauce: 'alfredo',
        id: 420
    },
    {
        name: 'lasagna',
        type: 'pasta',
        sauce: 'marinara',
        id: 808

    }
]

// GET
app.get('/food', (req, res) => {
    res.send({database})
})

//POST
app.post('/food', (req, res) => {

    console.log(req.body)
    database.push(req.body);
    res.send(database)
})

//delete
app.delete('/spot/:_id', (req, res) => {
    const {_id} = req.params;
    const index = data.findIndex(spot => spot._id === _id)
    data.splice(index, 1);
    res.send('Item successfully removed')
})


//PUT
app.put('/spot:_id', (req, res) => {
    const {_id} = req.params;
    const updatedObj = req.body;
    data.forEach(spot => {
        if (spot._id === _id) {
            spot = Object.assign(spot, updatedObj);
        }
})
res.send('Item updated')
})


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})




// GET1:
app.get('/spot/:_id', (req, res) => {
    const {_id} = req.params;
    res.send(data.find(spot => spot._id === _id));
})
