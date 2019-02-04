var readline = require('readline-sync');


// var yell = readline.question('Tell me what to yell! ')
// console.log(yell.toUpperCase());

// var length = readline.question('What do you want the length of? ')
// console.log(length.length);

// var concat1 = readline.question('Lets put two strings together! First string? ')
// var concat2 = readline.question('2nd string? ')
// console.log(concat1 + concat2);

var longmessage = readline.question('Tell me a story! ');
// var newmessage = Math.floor(longmessage.length/2)
// console.log(longmessage.slice(newmessage, longmessage.length));

var newcut = readline.question('Where does it hurt? (type a number) ');
console.log(longmessage.slice((newcut + 1), longmessage.length));