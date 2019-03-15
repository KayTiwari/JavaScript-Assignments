const express = require('express');
const app = express();
const port = 9696;

app.use(express.json());
const database = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        isAlive: true,
        type: 'Jedi',
        id: 666,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png'
    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        isAlive: true,
        type: 'Sith',
        id: 64206,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        isAlive: false,
        type: 'Jedi',
        id: 420,
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/13/20/mace-windu.jpg'
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