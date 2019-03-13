const express = require('express');
const app = express();
const port = 6969;
const uuid = require('uuid')

app.use(express.json())
const database = [
    {
        name: "Abhi",
        description: "Still do Zen garden",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Itsukushima_Gate.jpg/1200px-Itsukushima_Gate.jpg",
        completed: false,
        _id: uuid.v4()
    }
]

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

app.get('/data', (req, res) => {
    res.send({database})
})

app.post('/data', (req, res) => {
    const newData = req.body;
    database.push(newData);
    res.send({database});
})

app.delete('/data/:id', (req, res) => {
    const {id} = req.params;
    const index = database.findIndex(data => data._id === id);
    database.splice(index, 1);
    res.send('Successfully removed item');
})

app.put('/data/:id', (req, res) => {
    const {id} = req.params;
    const newData = req.body;
    database.forEach(olddata => {
        if (olddata._id === id) {
           olddata = Object.assign(olddata, newData);
        }
    })
    res.send(database);
})