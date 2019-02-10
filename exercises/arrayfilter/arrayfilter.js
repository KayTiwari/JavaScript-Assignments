var numbers = [1, 5, 50, 100, 1000];

var greaterthanfive = numbers.filter(function(number){
    return number > 5;
})
console.log(greaterthanfive);

var evenoOnly = numbers.filter(function(number){
    return (number % 2 == 0);
})
console.log(evenoOnly);

var strings = ["dog", "wolf", "by", "family", "eaten", "camping"];

var fiveOrFewer = strings.filter(function(string){
    return (string.length < 5);
})
console.log(fiveOrFewer);

var people = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];

var belong = people.filter(function(array){
    return (array.member === true);
})
console.log(belong);

var agepeople = [
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
];
var oldEnough = agepeople.filter(function(array){
    return (array.age >= 18);
})
console.log(oldEnough);