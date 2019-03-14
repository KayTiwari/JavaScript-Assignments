const express = require('express');
const app = express();
const port = 6969;

const database = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.use(express.json());

app.listen(port, () => {
    console.log(`${port} is online`);
})

app.get('/data', (req, res) => {
    const {type, fruit, name} = req.query;
    console.log(fruit)
    if (type) {
        const types = database.filter(item => item.type === type)
        res.send(types);
    } else if (fruit) {
        const bananas = database.filter(item => item.name === "banana");
        res.send(bananas);
    } else {
    res.send({database});
    }
})