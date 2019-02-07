var numbers = [2, 5, 10];

var doublearray = numbers.map(function(number) {
    return number * 2;
})
console.log(doublearray);

var stringup = numbers.map(function(number) {
    return number.toString();
})
console.log(stringup);

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
var capitalize = names.map(function(string){
    var x = string.toLowerCase();
    var y = string.charAt(0).toUpperCase();
    return(y + x.slice(1));
})
console.log(capitalize);

namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
] 
var namers = namesOnly.map(function(array){
    return array.name;
})
console.log(namers);

var agers = namesOnly.map(function(array){
    if (array.age >= 18) {
        console.log(array.name + ' can go see the movie');
    } else {
        console.log(array.name + ' cannot go to the movie');
    }
})

var DOM = namesOnly.map(function(array){
    console.log(`<h1>${array.name}</h1><h2>${array.age}</h2>`);
})

