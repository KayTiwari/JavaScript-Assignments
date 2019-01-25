var shopper = {
    Name: 'Abhi',
    Age: 23,
    isAlive: true,
    Bought: function (item) {
        console.log("I bought " + item);
    },
    grocerycart: ['Milk', 'Eggs', 'Bread']
};
shopper.Bought('Apples');