const express = require('express');
const app = express();
const port = 9696;

app.use(express.json());
const database = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        isAlive: true,
        bounty: 500,
        type: 'Jedi',
        id: 666
    }
]

app.listen(port, () => {
    console.log(`${port} is running`);
})

app.get('/data', (req, res) => {
    res.send({database});
})

app.post('/data', (req, res) => {
    database.push(req.body);
    res.send({database});
})

app.delete('/data/:id', (req, res) => {
    const {id} = req.params;
    const index = database.indexOf(data => data.id === id);
    database.splice(index, 1);
    res.send('Kill confirmed')
})

app.put('/data/:id', (req, res) => {
    const {id} = req.params;
    const newData = req.body;
    database.forEach(data => {
        if (data.id === id) {
            data = Object.assign(data, newData);
        }
    })
    res.send('Item updated');
})