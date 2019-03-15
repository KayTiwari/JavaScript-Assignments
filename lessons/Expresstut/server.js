const express = require("express");
const app = express();
const port = 6969;
const uuid = require('uuid');
const mongoose = require('mongoose')
const Vacation = require('./vacation');

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

// .get((req, res) => {
//     Vacation.find(err, vacation) => {
//         if (err) {
//             return res.status(500).send(err);
//         } else {
//             return res.status(200).send(vacation)
//         }
//     }
// })

//POST
app.post('/food', (req, res) => {
    const newObj = new Vacation(req.body);
    newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newObj);
    })
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


mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB")
})

// GET1:
app.get('/spot/:_id', (req, res) => {
    const {_id} = req.params;
    res.send(data.find(spot => spot._id === _id));
})
