const carrots = ['bright orange', 'ripe', 'rotten'];

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: 'carrot', name: carrot}
    })
}


// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const newpep = people.filter(word => word.friendly === true);
// console.log(newpep);

// const dosum (a,b => a + b);
// console.log(dosum(1,2));