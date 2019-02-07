var readline = require('readline-sync');

var number1 = readline.question('Whats the first num? ');
var number2 = readline.question('Whats the second num ');
var operation = readline.question('What operation would you like performed? (add, sub, mul, div) ');

if (operation === 'add'){
     sum = +number1 + +number2;
     console.log('The sum is ' + sum);
    }
if (operation === 'mul') {
    sum = +number1 * +number2;
    console.log('The product is ' + sum);
    }
    if (operation === 'div') { 
    sum = +number1 / +number2;
    console.log('The product is ' + sum);
    }
    if (operation === 'sub') {
    sum = +number1 - +number2;
    console.log('The product is ' + sum);
    }
